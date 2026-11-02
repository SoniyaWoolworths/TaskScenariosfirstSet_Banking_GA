import { test, expect } from '@playwright/test';

const allCredentials = [
  { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' },//BankingAccountant
  { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' },//OHDAccountant
  { username: process.env.USERNAME3, password: process.env.PASSWORD3, name: 'User3' },//DSISystemSpecialist
  { username: process.env.USERNAME4, password: process.env.PASSWORD4, name: 'User4' },//DSIManager
  { username: process.env.USERNAME5, password: process.env.PASSWORD5, name: 'User5' },//EEIAccountant
  { username: process.env.USERNAME6, password: process.env.PASSWORD6, name: 'User6' },//EEIAccountingManager
  { username: process.env.USERNAME7, password: process.env.PASSWORD7, name: 'User7' },//PAAccountant
  { username: process.env.USERNAME8, password: process.env.PASSWORD8, name: 'User8' },//PAAccountingManager
  { username: process.env.USERNAME9, password: process.env.PASSWORD9, name: 'User9' },//RetailAccountant
  { username: process.env.USERNAME10, password: process.env.PASSWORD10, name: 'User10' },//RetailSnrAccountant
];

// const usersToTest = [3, 4, 7, 8, 9, 10]; 
const usersToTest = [1];

const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testF1579- ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    await page.getByRole('textbox', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('button', { name: 'More' }).nth(0).click();
    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: 'Transaction' }).click();
    await page.getByRole('link', { name: 'Clear G/L Accounts Manual' }).click();
    await page.getByRole('textbox', { name: 'Company Code:' }).click();
    await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
    await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    //await page.waitForTimeout(90000);
    await page.waitForTimeout(50000);
  });
}
