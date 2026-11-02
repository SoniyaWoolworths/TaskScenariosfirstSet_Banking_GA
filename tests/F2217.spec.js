import { test, expect } from '@playwright/test';

// Define the credentials array from .env file
const allCredentials = [
  { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' },
  { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' },
  { username: process.env.USERNAME3, password: process.env.PASSWORD3, name: 'User3' },
  { username: process.env.USERNAME4, password: process.env.PASSWORD4, name: 'User4' },
  { username: process.env.USERNAME5, password: process.env.PASSWORD5, name: 'User5' },
  { username: process.env.USERNAME6, password: process.env.PASSWORD6, name: 'User6' },
  { username: process.env.USERNAME7, password: process.env.PASSWORD7, name: 'User7' },
  { username: process.env.USERNAME8, password: process.env.PASSWORD8, name: 'User8' },
  { username: process.env.USERNAME9, password: process.env.PASSWORD9, name: 'User9' },
  { username: process.env.USERNAME10, password: process.env.PASSWORD10, name: 'User10' },
];

// Select which users to test - Change these numbers to run different users
const usersToTest = [1];
//const usersToTest = [8, 9]; // Only run users 1, 2, 6, 8, 9
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

// Run test for each credential set
for (const cred of credentials) {
  test(`testF2217 - ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.locator('[title="More"]').nth(0).click({ force: true });
    await page.getByRole('listitem', { name: 'Reporting - Financial' }).click({ force: true });
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Display Line Items in General' }).click();
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    await page.waitForTimeout(5000);
    //await page.getByText('G/L Account: 100001 - WBC').click();
    //await page.waitForTimeout(7000);
  });
}