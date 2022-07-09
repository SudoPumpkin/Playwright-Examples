/* eslint-disable prettier/prettier */
import { test, expect } from '@playwright/test';


  test('Filter Search Results and Apply', async ({ page }) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await page.goto('https://web3.career/');
    const landingPage = await page.locator('h1');

    await expect(landingPage).toContainText('Web3 is a new paradigm');
    await page.type('input[placeholder="🔎 Tag, Location, Company"]', 'qual');
    await page.click('text=quality-assurance');
    const qaResults = await page.locator('h1');

    await expect(qaResults).toContainText('Quality Assurance Jobs in Web3');
    // the remote 'checkbox' is misspelled here. #bug
    await page.click('#remote_checbox');

    await page.click('//h3[normalize-space()="Decent DAO"]');
    const decentDao = page.locator('(//div[normalize-space()="Decent DAO is hiring a"])[1]');
    delay(1000);

    await expect(decentDao).toContainText('Decent DAO is hiring a ');
    const candyShop = page.locator('//p[contains(text(),"When applying, mention the word CANDYSHOP when app")]');

    await expect(candyShop).toContainText('CANDYSHOP');

    await page.screenshot({
      path: 'CANDYSHOP.png',
      fullPage: true,
    });

    await page.click(
     '(//a[contains(@class,"my-btn my-btn-primary-maximum")][normalize-space()="Apply Now"])[3]'
    );
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe1WyQBkVUbL9xdp18twztm2TYhAcrFxwgGNSy9-r7Kw__oTQ/viewform?ref=web3.career&src=web3.career&source=web3.career');

    const formHeader = page.locator('.ahS2Le');

    await expect(formHeader).toContainText("Decent DAO Core Contributor Application");

   // Answers are input as if the Playwright framework were responding to the questions.
    //first name and last name
    await page.type('(//input[@type="text"])[1]','Playwright Bot');
    //email
    await page.type('(//input[@type="text"])[2]', 'a_name@domainname.com');
    //discord username
    await page.type('(//input[@type="text"])[3]', 'Pl4ywr1ght#0001');
    //telegram name
    await page.type('(//input[@type="text"])[4]', "@Playwright_bot");
    // Largest Prior Project
    await page.type('[aria-label="Your answer"] >> nth=0', "SaaS - QA Bot");
    //Timezone
    await page.type('(//input[@type="text"])[5]', 'EST');
    // what job is being applied for
    await page.type('(//input[@type="text"])[6]', 'Web3 Quality Assurance Engineer');
    // Why Decent
    await page.type('(//textarea[@aria-label="Your answer"])[2]', 'The ability to provide an impact of quality and usability on innovative emerging technology.');
    // Web3 experience
    await page.type('(//textarea[@aria-label="Your answer"])[3]', 'Tezos and NFT collecting/selling.');
    // Future goals
    await page.type('(//textarea[@aria-label="Your answer"])[4]', 'To provide innovative automation for devs for years to come.');
    // Linkedin profile
    await page.type('(//input[@type="text"])[7]', 'https://www.linkedin.com/company/playwrightweb/');
    // here I am just going to show that radio buttons can be selected since there's nothing written here. #bug
    await page.click('[aria-label="Option 1"]');
    // then I am going to clear this selection via the 'Clear selection' button because I am not sure what we're actually selecting.
    delay (2000);
    await page.click('(//span[contains(text(),"Clear selection")])[1]');
    //Twitter
    await page.type('(//input[@type="text"])[8]', 'https://twitter.com/playwrightweb');
    //Github repo
    await page.type('(//input[@type="text"])[9]', 'https://github.com/microsoft/playwright/releases/tag/v1.23.0');
    //portfolio - there's no validation here so really you can insert any kind of string.
    await page.type('(//input[@type="text"])[10]', 'None');
    // How did you hear about us?
    await page.type('(//input[@type="text"])[11]', 'https://web3.career/');
    // Submit application, I am going to comment this out so it doesn't spam.
    // await page.click('div[role="button"]:has-text("Submit")');
    
    // clear form because we're not actually going to submit this.
    await page.click('div[role="button"]:has-text("Clear form")');

    //confirming the correct 'Clear form' selector is present
    const clearForm = page.locator('//div[normalize-space()="Clear form?"]');
    await expect(clearForm).toContainText('Clear form?');
    
    //click 'clear form' button
    await page.click('div[role="button"]:has-text("Clear form") >> nth=2');

    // confirm field is empty
    const firstName = page.locator('(//input[@type="text"])[1]');
    await expect(firstName).toBeEmpty;

    //full page screenshot to confirm
    await page.screenshot({
      path: 'EmptyField.png',
      fullPage: true,
    });








    











   


    })
