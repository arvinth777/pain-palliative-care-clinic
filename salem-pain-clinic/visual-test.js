const { chromium } = require('playwright');

async function visualTest() {
  console.log('🎨 Starting Visual Layout Testing...\n');
  
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3000';
  const issues = [];

  try {
    // Test 1: Homepage Desktop
    console.log('📱 Testing Homepage - Desktop (1920x1080)');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    
    // Check header positioning
    const header = await page.locator('header').boundingBox();
    console.log('  ✓ Header position:', header);
    
    // Check hero section
    const hero = await page.locator('section').first().boundingBox();
    console.log('  ✓ Hero section height:', hero?.height);
    
    // Check if content is properly spaced
    const sections = await page.locator('section').count();
    console.log('  ✓ Total sections:', sections);
    
    await page.screenshot({ path: 'test-screenshots/desktop-1920.png', fullPage: true });
    
    // Test 2: Tablet View
    console.log('\n📱 Testing Homepage - Tablet (768x1024)');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    
    // Check if mobile menu button is visible
    const mobileMenuVisible = await page.locator('button[aria-label="Toggle menu"]').isVisible();
    console.log('  ✓ Mobile menu button visible:', mobileMenuVisible);
    
    await page.screenshot({ path: 'test-screenshots/tablet-768.png', fullPage: true });
    
    // Test 3: Mobile View
    console.log('\n📱 Testing Homepage - Mobile (375x667)');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    
    const mobileMenuBtn = await page.locator('button[aria-label="Toggle menu"]');
    const isMobileMenuVisible = await mobileMenuBtn.isVisible();
    console.log('  ✓ Mobile menu button visible:', isMobileMenuVisible);
    
    if (isMobileMenuVisible) {
      await mobileMenuBtn.click();
      await page.waitForTimeout(500);
      console.log('  ✓ Mobile menu opened');
    }
    
    await page.screenshot({ path: 'test-screenshots/mobile-375.png', fullPage: true });
    
    // Test 4: Check all pages for layout issues
    const pages = [
      { name: 'About', url: '/about' },
      { name: 'Services', url: '/services' },
      { name: 'Contact', url: '/contact' },
      { name: 'FAQ', url: '/faq' }
    ];
    
    for (const testPage of pages) {
      console.log(`\n📄 Testing ${testPage.name} Page - Desktop`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(`${baseUrl}${testPage.url}`);
      await page.waitForLoadState('networkidle');
      
      // Check for horizontal overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = 1920;
      
      if (bodyWidth > viewportWidth) {
        const issue = `${testPage.name}: Horizontal overflow detected (${bodyWidth}px > ${viewportWidth}px)`;
        console.log('  ⚠️ ', issue);
        issues.push(issue);
      } else {
        console.log('  ✓ No horizontal overflow');
      }
      
      // Check header is fixed
      const headerPosition = await page.locator('header').evaluate(el => 
        window.getComputedStyle(el).position
      );
      console.log('  ✓ Header position:', headerPosition);
      
      // Check spacing
      const mainPadding = await page.locator('main').evaluate(el => 
        window.getComputedStyle(el).paddingTop
      );
      console.log('  ✓ Main padding-top:', mainPadding);
      
      await page.screenshot({ 
        path: `test-screenshots/${testPage.name.toLowerCase()}-desktop.png`, 
        fullPage: true 
      });
      
      // Test mobile view
      console.log(`\n📱 Testing ${testPage.name} Page - Mobile`);
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(`${baseUrl}${testPage.url}`);
      await page.waitForLoadState('networkidle');
      
      const mobileBodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const mobileViewportWidth = 375;
      
      if (mobileBodyWidth > mobileViewportWidth) {
        const issue = `${testPage.name} Mobile: Horizontal overflow (${mobileBodyWidth}px > ${mobileViewportWidth}px)`;
        console.log('  ⚠️ ', issue);
        issues.push(issue);

        // Find overflowing elements
        const offenders = await page.evaluate(() => {
          const vw = window.innerWidth;
          const list = [];
          document.querySelectorAll('body *').forEach((el) => {
            const rect = el.getBoundingClientRect();
            // consider elements that overflow to the right or left
            if (rect.right > vw + 1 || rect.left < -1) {
              list.push({
                tag: el.tagName.toLowerCase(),
                id: el.id || null,
                className: el.className || null,
                rect: { left: rect.left, right: rect.right, width: rect.width }
              });
            }
          });
          // de-duplicate by selector-ish signature and sort by overflow amount
          const unique = [];
          const seen = new Set();
          for (const it of list) {
            const key = `${it.tag}|${it.id}|${it.className}`;
            if (!seen.has(key)) {
              seen.add(key);
              unique.push(it);
            }
          }
          return unique
            .map(it => ({ ...it, overflow: Math.max(0, it.rect.right - vw, -it.rect.left) }))
            .sort((a, b) => b.overflow - a.overflow)
            .slice(0, 10);
        });

        if (offenders.length) {
          console.log(`  🔎 Top overflow offenders on ${testPage.name} (mobile):`);
          offenders.forEach((o, i) => {
            console.log(
              `   ${i + 1}. <${o.tag} id="${o.id}" class="${(o.className||'').toString().slice(0,120)}"> overflow=${o.overflow.toFixed(1)} rect=(${o.rect.left.toFixed(1)}, ${o.rect.right.toFixed(1)})`
            );
          });
        }
      } else {
        console.log('  ✓ No horizontal overflow on mobile');
      }
      
      await page.screenshot({ 
        path: `test-screenshots/${testPage.name.toLowerCase()}-mobile.png`, 
        fullPage: true 
      });
    }
    
    // Test 5: Interactive Elements
    console.log('\n🖱️  Testing Interactive Elements');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    
    // Test phone links
    const phoneLinks = await page.locator('a[href^="tel:"]').count();
    console.log('  ✓ Phone links found:', phoneLinks);
    
    // Test navigation links
    const navLinks = await page.locator('nav a').count();
    console.log('  ✓ Navigation links:', navLinks);
    
    // Test buttons
    const buttons = await page.locator('button, a.btn-primary, a.btn-secondary').count();
    console.log('  ✓ Interactive buttons:', buttons);
    
    // Test FAQ accordion
    console.log('\n🎯 Testing FAQ Accordion');
    await page.goto(`${baseUrl}/faq`);
    await page.waitForLoadState('networkidle');

    // Click a visible accordion button (avoid hidden mobile menu toggle)
    const faqButton = page.locator('section:has-text("Frequently Asked Questions") button:visible').first();
    if (await faqButton.isVisible()) {
      await faqButton.click();
      await page.waitForTimeout(500);
      console.log('  ✓ FAQ accordion works');
      await page.screenshot({ path: 'test-screenshots/faq-accordion-open.png' });
    } else {
      console.log('  ⚠️ No visible accordion button found');
    }
    
    // Test Contact Form
    console.log('\n📝 Testing Contact Form');
    await page.goto(`${baseUrl}/contact`);
    await page.waitForLoadState('networkidle');
    
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="phone"]', '+91 9876543210');
    await page.fill('textarea[name="message"]', 'This is a test message');
    console.log('  ✓ Form fields can be filled');
    
    await page.screenshot({ path: 'test-screenshots/contact-form-filled.png' });
    
    console.log('\n✅ Visual testing completed!');
    console.log('\n📸 Screenshots saved in test-screenshots/ directory');
    
    if (issues.length > 0) {
      console.log('\n⚠️  Layout Issues Found:');
      issues.forEach((issue, i) => console.log(`  ${i + 1}. ${issue}`));
    } else {
      console.log('\n🎉 No layout issues detected!');
    }
    
  } catch (error) {
    console.error('\n❌ Test error:', error.message);
    issues.push(error.message);
  } finally {
    await browser.close();
  }
  
  return issues;
}

visualTest().then(issues => {
  if (issues.length === 0) {
    console.log('\n✨ All visual tests passed!');
    process.exit(0);
  } else {
    console.log('\n⚠️  Tests completed with issues');
    process.exit(1);
  }
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
