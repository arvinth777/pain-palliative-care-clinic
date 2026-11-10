import { test, expect } from '@playwright/test';
import { createRateLimit } from '../lib/rate-limit';

test('request limits block a burst and reset after the window', () => {
  const retryAfter = createRateLimit(2, 60);
  const headers = new Headers();
  expect(retryAfter(headers, 1000)).toBe(0);
  expect(retryAfter(headers, 2000)).toBe(0);
  expect(retryAfter(headers, 3000)).toBe(58);
  expect(retryAfter(headers, 61000)).toBe(0);
});

test('navigation guides visitors through the main pages and treatment sections', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Specialist pain care in Salem.');
  const carousel = page.getByRole('region', { name: 'Pain points' });
  const rotation = carousel.getByRole('button', { name: /slideshow/ });
  await expect(carousel.getByRole('img', { name: 'Salem Pain Clinic' })).toBeVisible();
  await rotation.press('ArrowLeft');
  await expect(carousel.getByRole('img', { name: /red highlights at the knees/i })).toBeVisible();
  await rotation.press('ArrowRight');
  await expect(carousel.getByRole('img', { name: 'Salem Pain Clinic' })).toBeVisible();
  await rotation.press('ArrowRight');
  await expect(carousel.getByRole('img', { name: /lower spine/ })).toBeVisible();
  await page.getByRole('navigation', { name: 'Our areas of care' })
    .getByRole('link', { name: /Image-guided procedures/ }).click();
  await expect(page).toHaveURL(/\/services#interventional$/);
  await expect(page.locator('#interventional')).toBeInViewport();
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Open in Google Maps' }))
    .toHaveAttribute('href', 'https://www.google.com/maps?cid=8634017193412478425');
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  await expect(nav.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(page.getByRole('heading', { name: 'Conditions we treat' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The clinic in Swarnapuri' })).toBeVisible();
  for (const [label, path] of [
    ['Treatments', '/services'], ['About', '/about'], ['FAQs', '/faq'], ['Visit & contact', '/contact'],
  ]) {
    await page.getByRole('navigation', { name: 'Continue exploring' }).getByRole('link', { name: `Continue to ${label}`, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
    await expect(nav.getByRole('link', { name: label, exact: true })).toHaveAttribute('aria-current', 'page');
  }
  await page.getByRole('navigation', { name: 'Continue exploring' }).getByRole('link', { name: 'Back to Home' }).click();
  await expect(nav.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('aria-current', 'page');
  await nav.getByRole('link', { name: 'Treatments' }).click();
  await expect(page).toHaveURL(/\/services$/);
  for (const link of await page.locator('a[href^="#"]').all()) {
    const href = await link.getAttribute('href');
    if (href && href !== '#') await expect(page.locator(href)).toHaveCount(1);
  }
});

test('contact form handles failed and successful submissions', async ({ page }) => {
  await page.route('**/api/contact', route => route.fulfill({ status: 500, json: { success: false } }));
  await page.goto('/contact');
  await page.getByLabel('Full Name *').fill('Test Patient');
  await page.getByLabel('Phone Number *').fill('9999999999');
  await page.getByLabel('Message *').fill('Test message');
  await page.getByRole('button', { name: 'Send request' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'could not send' })).toBeVisible();
  await expect(page.getByLabel('Message *')).toHaveValue('Test message');
  await page.unroute('**/api/contact');
  await page.route('**/api/contact', route => route.fulfill({ status: 200, json: { success: true } }));
  await page.getByRole('button', { name: 'Send request' }).click();
  await expect(page.getByRole('status')).toContainText('Request received');
});

test('FAQ and mobile menu expose their state', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/faq');
  const menu = page.getByRole('button', { name: 'Toggle menu' });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await menu.click();
  const question = page.getByRole('button', { name: 'What conditions do you treat?' });
  await question.click();
  await expect(question).toHaveAttribute('aria-expanded', 'true');
  await menu.click();
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Home', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Specialist pain care in Salem.');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});

test('pain explorer keeps the latest selection when an image arrives late', async ({ page }) => {
  let releaseImage = () => {};
  const delayedImage = new Promise<void>(resolve => { releaseImage = resolve; });
  await page.route('**/_next/image*', async route => {
    const url = new URL(route.request().url());
    if (url.searchParams.get('url')?.includes('neck-clinical') && Number(url.searchParams.get('w')) > 256) await delayedImage;
    await route.continue();
  });
  await page.goto('/');
  const options = page.getByRole('group', { name: 'Conditions we treat' });
  await options.getByRole('button', { name: 'Neck & shoulder' }).click();
  await options.getByRole('button', { name: 'Knee & joints' }).click();
  await expect(page.locator('.clinic-pain-description h3')).toHaveText('Knee & joints');
  releaseImage();
  await expect.poll(() => page.locator('.clinic-pain-images img').nth(2).evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  await expect(page.locator('.clinic-pain-description h3')).toHaveText('Knee & joints');
  await options.getByRole('button', { name: 'Sciatica' }).press('Enter');
  await expect(page.locator('.clinic-pain-description h3')).toHaveText('Sciatica');
  await expect(page.locator('.clinic-pain-explorer')).toHaveAttribute('data-motion', 'instant');
  await expect(page.locator('#pain-explorer-detail')).toHaveAttribute('aria-busy', 'false');
  await expect(page.locator('.clinic-pain-images img[aria-hidden="false"]')).toHaveCount(1);
});

test('keyboard and reduced motion keep disclosures and chat immediate', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Play slideshow' })).toBeVisible();
  expect(await page.locator('.clinic-hero').evaluate(element => element.getAnimations({ subtree: true }).length)).toBe(0);
  const menu = page.getByRole('button', { name: 'Toggle menu' });
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  await menu.press('Enter');
  await expect(nav).toHaveAttribute('data-motion', 'instant');
  await nav.getByRole('link', { name: 'FAQs', exact: true }).focus();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(page.locator('#landing-mobile-menu')).toHaveAttribute('inert', '');
  await menu.press('Enter');
  await nav.getByRole('link', { name: 'FAQs', exact: true }).press('Enter');
  const question = page.getByRole('button', { name: 'What conditions do you treat?' });
  await question.press('Enter');
  await expect(page.locator('#faq-0-0')).toBeVisible();
  await question.press('Enter');
  await expect(page.locator('#faq-0-0')).toBeHidden();
  const launcher = page.getByRole('button', { name: 'Chat with the clinic assistant' });
  await launcher.press('Enter');
  await expect(page.getByRole('button', { name: 'Close chat' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('#clinic-chat-panel')).toHaveCount(0);
  await expect(launcher).toBeFocused();
});

test('an unavailable explorer image preserves the current pain area', async ({ page }) => {
  await page.route('**/_next/image*', route => {
    const url = new URL(route.request().url());
    return url.searchParams.get('url')?.includes('neck-clinical') && Number(url.searchParams.get('w')) > 256
      ? route.abort() : route.continue();
  });
  await page.goto('/');
  const options = page.getByRole('group', { name: 'Conditions we treat' });
  await options.scrollIntoViewIfNeeded();
  await expect(options.getByRole('button', { name: 'Neck & shoulder' })).toBeDisabled();
  await expect(page.locator('.clinic-pain-description h3')).toHaveText('Back & spine');
  await options.getByRole('button', { name: 'Knee & joints' }).click();
  await expect(page.locator('.clinic-pain-description h3')).toHaveText('Knee & joints');
});

test('photo reveals keep clinic content visible without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(test.info().project.use.baseURL + '/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.locator('.clinic-doctor-photo').scrollIntoViewIfNeeded();
  await expect(page.locator('.clinic-doctor-photo')).toHaveCSS('opacity', '1');
  await expect(page.locator('.clinic-doctor-photo img')).toBeVisible();
  await expect(page.locator('.clinic-credentials')).toContainText('MBBS');
  await context.close();
});

test('public endpoints reject invalid or oversized messages', async ({ request }) => {
  const contact = await request.post('/api/contact', { data: { name: 'A', phone: '1', message: 'x'.repeat(5001) } });
  expect(contact.status()).toBe(400);
  const chat = await request.post('/api/chat', { data: { message: 'x'.repeat(2001) } });
  expect(chat.status()).toBe(400);
  for (const data of ['null', '{']) {
    const badChat = await request.post('/api/chat', {
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    expect(badChat.status()).toBe(400);
  }
});

test('clinic chat answers common questions and routes emergencies without Gemini', async ({ page, request }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Chat with the clinic assistant' }).click();
  await page.getByRole('button', { name: 'What are your clinic hours?' }).click();
  const chat = page.getByRole('log', { name: 'Chat messages' });
  await expect(chat).toContainText('10:00 AM - 1:00 PM');

  for (const [message, expected] of [
    ['Where is the clinic and how do I book?', ['Omalur Main Rd', '+91 98427 98422']],
    ['I have chest pain. What are your hours?', ['call 112']],
  ] as const) {
    const response = await request.post('/api/chat', { data: { message } });
    expect(response.ok()).toBe(true);
    const { response: reply } = await response.json();
    for (const text of expected) expect(reply).toContain(text);
    if (message.includes('chest pain')) expect(reply).not.toContain('Clinic hours');
  }
});

test('chat controls stay on screen on a short phone viewport', async ({ page }) => {
  await page.setViewportSize({ width: 667, height: 375 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Chat with the clinic assistant' }).click();
  const close = page.getByRole('button', { name: 'Close chat', exact: true }).last();
  const input = page.getByRole('textbox', { name: 'Chat message', exact: true });
  await expect(close).toBeInViewport({ ratio: 1 });
  await expect(input).toBeInViewport({ ratio: 1 });
  await input.fill('What are your hours?');
  await page.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('log')).toContainText('10:00 AM - 1:00 PM');
  await close.click();
  await expect(input).toBeHidden();
});

test('Tamil selection persists across public pages, reloads and narrow-screen navigation', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('/');
  await page.getByRole('link', { name: 'தமிழுக்கு மாற்றவும்' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ta');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('சேலத்தில் சிறப்பு வலி நிவாரணச் சிகிச்சை.');
  await expect(page.getByRole('link', { name: 'Switch to English' })).toBeInViewport({ ratio: 1 });
  await page.getByRole('button', { name: 'வழிசெலுத்தல் பட்டியலைத் திறக்க / மூட' }).click();
  await page.getByRole('navigation', { name: 'முதன்மை வழிசெலுத்தல்' }).getByRole('link', { name: 'சிகிச்சைகள்', exact: true }).click();
  await expect(page).toHaveURL(/\/services$/);
  for (const path of ['/services', '/about', '/faq', '/contact', '/privacy', '/terms', '/disclaimer', '/']) {
    await page.goto(path === '/' ? '/ta' : '/ta' + path);
    await expect(page.locator('html')).toHaveAttribute('lang', 'ta');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/[\u0B80-\u0BFF]/);
    await expect(page).toHaveTitle(/[\u0B80-\u0BFF]/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const clipped = await page.locator('main input, main textarea, main button, main p').evaluateAll(elements => elements.filter(el => {
      if (el.closest('.clinic-pain-options')) return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && (rect.left < -1 || rect.right > innerWidth + 1);
    }).map(el => el.textContent?.slice(0, 60) || el.tagName));
    expect(clipped, `Clipped Tamil content on ${path}`).toEqual([]);
    if (path === '/') {
      for (const option of await page.locator('.clinic-pain-options button').all()) {
        await option.focus();
        const fits = await option.evaluate(el => {
          const bounds = el.getBoundingClientRect();
          const label = el.querySelector('span');
          return bounds.left >= 0 && bounds.right <= innerWidth && label.scrollWidth <= label.clientWidth + 1;
        });
        expect(fits, 'Every Tamil pain option can be brought fully into view').toBe(true);
      }
    }
  }
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('சேலத்தில் சிறப்பு வலி நிவாரணச் சிகிச்சை.');
  await page.getByRole('link', { name: 'Switch to English' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Specialist pain care in Salem.');
});

test('language switching preserves form input and translates submission states', async ({ page }) => {
  await page.route('**/api/contact', route => route.fulfill({ status: 429, json: { success: false } }));
  await page.goto('/contact');
  await page.getByLabel('Full Name *').fill('சோதனை பெயர்');
  await page.getByLabel('Phone Number *').fill('9999999999');
  await page.getByLabel('Message *').fill('சந்திப்பு பற்றிய தகவல் தேவை');
  await page.getByRole('link', { name: 'தமிழுக்கு மாற்றவும்' }).click();
  await expect(page.getByLabel('முழுப் பெயர் *')).toHaveValue('சோதனை பெயர்');
  await expect(page.getByLabel('செய்தி *')).toHaveValue('சந்திப்பு பற்றிய தகவல் தேவை');
  await page.getByRole('button', { name: 'கோரிக்கையை அனுப்பவும்' }).click();
  await expect(page.locator('main').getByRole('alert')).toContainText('அதிக கோரிக்கைகள்');
  await expect(page.getByLabel('செய்தி *')).toHaveValue('சந்திப்பு பற்றிய தகவல் தேவை');
  await page.getByRole('link', { name: 'Switch to English' }).click();
  await expect(page.locator('main').getByRole('alert')).toContainText('Too many requests');
  await page.getByRole('link', { name: 'தமிழுக்கு மாற்றவும்' }).click();
  await page.unroute('**/api/contact');
  await page.route('**/api/contact', route => route.fulfill({ status: 200, json: { success: true } }));
  await page.getByRole('button', { name: 'கோரிக்கையை அனுப்பவும்' }).click();
  await expect(page.getByRole('status')).toContainText('கோரிக்கை பெறப்பட்டது');
});

test('Tamil chat supports suggestions, language preference and emergency precedence', async ({ page, request }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'தமிழுக்கு மாற்றவும்' }).click();
  await page.getByRole('button', { name: 'மையத்தின் உதவியாளருடன் உரையாடவும்' }).click();
  await page.getByRole('button', { name: 'மையம் செயல்படும் நேரம் என்ன?' }).click();
  await expect(page.getByRole('log')).toContainText('காலை 10:00');
  await page.getByRole('textbox', { name: 'உரையாடல் செய்தி' }).fill('மருத்துவரைப் பற்றி');
  await page.getByRole('link', { name: 'Switch to English' }).click();
  await expect(page.getByRole('textbox', { name: 'Chat message', exact: true })).toHaveValue('மருத்துவரைப் பற்றி');
  await expect(page.getByRole('log')).toContainText('காலை 10:00');

  for (const [message, language, expected] of [
    ['What are your hours?', 'ta', 'காலை 10:00'],
    ['மையம் எங்கு உள்ளது?', 'en', 'ஓமலூர்'],
    ['சந்திப்பை முன்பதிவு செய்வது எப்படி?', 'ta', '+91 98427 98422'],
    ['நெஞ்சு வலி உள்ளது. மையத்தின் நேரம் என்ன?', 'ta', '112'],
    ['I have chest pain. What are your hours?', 'ta', '112'],
    ['மூச்சுத்திணறல் உள்ளது, மையம் எங்கு உள்ளது?', 'ta', '112'],
  ]) {
    const response = await request.post('/api/chat', { data: { message, language } });
    expect(response.ok()).toBe(true);
    const { response: reply } = await response.json();
    expect(reply).toMatch(/[\u0B80-\u0BFF]/);
    expect(reply).toContain(expected);
    if (expected === '112') expect(reply).not.toContain('10:00');
  }
  const invalid = await request.post('/api/chat', { data: { message: '', language: 'ta' } });
  expect(invalid.status()).toBe(400);
  expect((await invalid.json()).response).toBe('சரியான செய்தியை உள்ளிடவும்.');
});
