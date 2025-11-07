import { test, expect } from '@playwright/test';

const CONTACT_SUCCESS_TEXT = "We've received your message and will call you back within 24 hours.";

test.describe('Salem Pain Clinic website', () => {
  test('homepage displays hero content and navigation', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', { level: 1, name: /Regain Your Life from Chronic Pain/i })
    ).toBeVisible();

    const nav = page.locator('header nav');
    await expect(nav.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'About', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Services', exact: true })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'FAQ', exact: true })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Book Appointment', exact: true })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Call Now' })).toBeVisible();

      const heroImage = page.getByRole('img', { name: /Exterior of Salem Pain Clinic/i });
      await expect(heroImage).toBeVisible();
  });

  test('services page highlights treatment areas', async ({ page }) => {
    await page.goto('/services');

    await expect(
      page.getByRole('heading', { level: 1, name: /Our Services/i })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { level: 2, name: /Specialized Treatment Areas/i })
    ).toBeVisible();

    const anchors = page.locator('section a').filter({ hasText: 'Chronic Pain Management' });
    await expect(anchors).toHaveCount(1);
  });

  test('contact form submits successfully', async ({ page }) => {
    await page.goto('/contact');

    await page.getByLabel('Full Name *').fill('Playwright Patient');
    await page.getByLabel('Phone Number *').fill('9999999999');
    await page.getByLabel('Email Address (Optional)').fill('patient@example.com');
    await page.getByLabel('Message *').fill('Testing automated contact form submission.');

    const responsePromise = page.waitForResponse((response) => {
      return response.url().includes('/api/contact') && response.request().method() === 'POST';
    });

    await page.getByRole('button', { name: 'Send Message' }).click();

    const response = await responsePromise;
    expect(response.ok()).toBeTruthy();

    await expect(page.getByRole('status')).toContainText('Thank You');
    await expect(page.getByRole('status')).toContainText(CONTACT_SUCCESS_TEXT);
  });

  test('faq accordion reveals answers when toggled', async ({ page }) => {
    await page.goto('/faq');

    const questionButton = page.getByRole('button', { name: 'What conditions do you treat?' });
    const answerText = page.getByText(/specializes in treating a wide range/i);

    await questionButton.click();
    await expect(answerText).toBeVisible();
  });

  test('mobile navigation menu opens and shows links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: 'Toggle menu' });
    await expect(menuButton).toBeVisible();

    await menuButton.click();

    const mobileMenu = page.locator('header nav').locator('div.space-y-1').last();
    await expect(mobileMenu).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: 'About', exact: true })).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: 'Book Appointment', exact: true })).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: '+91 9842798422', exact: true })).toBeVisible();
  });
});
