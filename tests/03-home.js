const { chromium } = require('playwright');
const { strictEqual } = require('assert');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage(); // Thêm await
    await page.goto('http://e-commerce-dev.betterbytesvn.com/');

    const actPageTitle = await page.title();
    strictEqual(actPageTitle, 'E-commerce site for automation testing – E-commerce site for automation testing',
        `Title không khớp. Kỳ vọng: E-commerce site..., Thực tế: ${actPageTitle}`);
    await browser.close();
})();