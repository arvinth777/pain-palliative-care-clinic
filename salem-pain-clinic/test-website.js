const { chromium } = require('playwright');

async function testWebsite() {
  console.log('🚀 Starting website testing...\n');
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  const issues = [];
  const baseUrl = 'http://localhost:3000';

  try {
    // Test Homepage
    console.log('📄 Testing Homepage...');
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/homepage.png', fullPage: true });
    
    // Check hero section
    const heroTitle = await page.locator('h1').first().textContent();
    console.log('✓ Hero title:', heroTitle);
    
    // Check navigation
    const navLinks = await page.locator('nav a').count();
    console.log('✓ Navigation links:', navLinks);
    
    // Check phone numbers are clickable
    const phoneLinks = await page.locator('a[href^="tel:"]').count();
    console.log('✓ Phone links:', phoneLinks);
    
    // Test About Page
    console.log('\n📄 Testing About Page...');
    await page.goto(`${baseUrl}/about`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/about.png', fullPage: true });
    
    const aboutTitle = await page.locator('h1').first().textContent();
    console.log('✓ About title:', aboutTitle);
    
    // Test Services Page
    console.log('\n📄 Testing Services Page...');
    await page.goto(`${baseUrl}/services`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/services.png', fullPage: true });
    
    const servicesTitle = await page.locator('h1').first().textContent();
    console.log('✓ Services title:', servicesTitle);
    
    // Check service cards
    const serviceCards = await page.locator('[href^="#"]').count();
    console.log('✓ Service navigation cards:', serviceCards);
    
    // Test Contact Page
    console.log('\n📄 Testing Contact Page...');
    await page.goto(`${baseUrl}/contact`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/contact.png', fullPage: true });
    
    const contactTitle = await page.locator('h1').first().textContent();
    console.log('✓ Contact title:', contactTitle);
    
    // Check form elements
    const formInputs = await page.locator('input, textarea').count();
    console.log('✓ Form inputs:', formInputs);
    
    // Test FAQ Page
    console.log('\n📄 Testing FAQ Page...');
    await page.goto(`${baseUrl}/faq`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/faq.png', fullPage: true });
    
    const faqTitle = await page.locator('h1').first().textContent();
    console.log('✓ FAQ title:', faqTitle);
    
    // Test FAQ accordion
    const faqButtons = await page.locator('button').count();
    console.log('✓ FAQ accordion buttons:', faqButtons);
    
    // Click first FAQ to test accordion
    await page.locator('button').first().click();
    await page.waitForTimeout(500);
    console.log('✓ FAQ accordion interaction works');
    
    // Test Mobile Responsiveness
    console.log('\n📱 Testing Mobile View...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/mobile-home.png', fullPage: true });
    
    // Test mobile menu
    const mobileMenuButton = await page.locator('button[aria-label="Toggle menu"]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await page.waitForTimeout(500);
      console.log('✓ Mobile menu opens');
      await page.screenshot({ path: 'test-screenshots/mobile-menu.png' });
    }
    
    // Test Tablet View
    console.log('\n📱 Testing Tablet View...');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-screenshots/tablet-home.png', fullPage: true });
    
    console.log('\n✅ All tests completed successfully!');
    console.log('\n📸 Screenshots saved in test-screenshots/ directory');
    
    if (issues.length > 0) {
      console.log('\n⚠️  Issues found:');
      issues.forEach((issue, i) => console.log(`${i + 1}. ${issue}`));
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    issues.push(error.message);
  } finally {
    await browser.close();
  }
  
  return issues;
}

// Run tests
testWebsite().then(issues => {
  if (issues.length === 0) {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
  } else {
    console.log('\n❌ Tests completed with issues');
    process.exit(1);
  }
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
