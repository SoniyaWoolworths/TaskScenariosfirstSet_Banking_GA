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
//const usersToTest = [3, 4, 5, 6, 7, 8, 9, 10];
const usersToTest = [1]; // Only run users 1 and 2
//const usersToTest = [3]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (const cred of credentials) {
  test(`testW0161 - ${cred.name} (${cred.username})`, async ({ page }) => {
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
  await page.getByRole('listitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Balance Sheet/Income' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).fill('ZW01');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).press('Enter');
   await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
   await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByText('Contains 1 itemACT01').click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().locator('#WDE8-icon').click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('0');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  //await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('tab', { name: 'Data Analysis' }).click();
 // await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByTitle('Data Analysis').click();
  await page.waitForTimeout(5000);
});
}
  //await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('listitem', { name: 'ZW01 (Woolworths Financial' }).press('Enter');
  /*await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).press('Delete');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).fill('0');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).press('Enter');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  //await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('tab', { name: 'Data Analysis' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByTitle('Data Analysis').click();
  await page.waitForTimeout(5000);
});*/

