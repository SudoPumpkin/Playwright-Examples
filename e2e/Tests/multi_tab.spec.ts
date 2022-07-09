import { expect, test } from '@playwright/test';

test('Multiple Tabs in 1 Browser', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
     await page1.goto('https://web3.career/');
     await page2.goto('https://docs.google.com/forms/d/e/1FAIpQLSe1WyQBkVUbL9xdp18twztm2TYhAcrFxwgGNSy9-r7Kw__oTQ/viewform?ref=web3.career&src=web3.career&source=web3.career');
     await page1.waitForTimeout(5000);

  });

