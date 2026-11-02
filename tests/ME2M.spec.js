import { test, expect } from '@playwright/test';

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
const usersToTest = [1];
//const usersToTest = [3, 4]; // Only run users 3 and 4
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (const cred of credentials) {
  test(`testME2M - ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('display purchasing documents by article');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByLabel('Display Purchasing Documents').click();
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).click();
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).fill('CC00009');
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).press('Enter');
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Organization' }).click();
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Organization' }).fill('1000');
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Organization' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});
}