import { expect, test } from '@playwright/test';

test('Multiple Tabs in 1 Browser', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
     await page1.goto('https://tab1');
     await page2.goto('https://tab2');
     await page1.waitForTimeout(5000);

  });

