const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.petrotank.com/');
  
  // Wait for the main content to load
  await page.waitForLoadState('networkidle');
  
  // Take a full page screenshot
  await page.screenshot({ path: 'petrotank_full.png', fullPage: true });
  
  // Extract all text
  const text = await page.evaluate(() => document.body.innerText);
  console.log("--- TEXT CONTENT ---");
  console.log(text);
  
  // Extract all images
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  console.log("--- IMAGES ---");
  console.log(images.join('\n'));
  
  await browser.close();
})();
