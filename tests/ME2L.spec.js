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
/*const allCredentials = [
  { username: process.env.BankingUsername, password: process.env.BankingPassword, name: 'T_BNK_ACCTNT', key: 'Banking' },
  { username: process.env.OHDAccountantUsername, password: process.env.OHDAccountantPassword, name: 'T_OHD_ACCTNT', key: 'OHDAccountant' },
  { username: process.env.DSISystemSpecialistUsername, password: process.env.DSISystemSpecialistPassword, name: 'T_DSI_SYSSPC', key: 'DSISystemSpecialist' },
  { username: process.env.DSIManagerUsername, password: process.env.DSIManagerPassword, name: 'T_DSI_MGR', key: 'DSIManager' },
  { username: process.env.EEIAccountantUsername, password: process.env.EEIAccountantPassword, name: 'T_EEI_ACCTNT', key: 'EEIAccountant' },
  { username: process.env.EEIAccountingManagerUsername, password: process.env.EEIAccountingManagerPassword, name: 'T_EEI_ACCMGR', key: 'EEIAccountingManager' },
  { username: process.env.PAAccountantUsername, password: process.env.PAAccountantPassword, name: 'T_PA_ACCTNT', key: 'PAAccountant' },
  { username: process.env.PAAccountingManagerUsername, password: process.env.PAAccountingManagerPassword, name: 'T_PA_ACCMGR', key: 'PAAccountingManager' },
  { username: process.env.RetailAccountantUsername, password: process.env.RetailAccountantPassword, name: 'T_RTL_ACCTNT', key: 'RetailAccountant' },
  { username: process.env.RetailSnrAccountantUsername, password: process.env.RetailSnrAccountantPassword, name: 'T_RTL_SR_ACN', key: 'RetailSnrAccountant' },
  { username: process.env.ServiceAccountantUsername, password: process.env.ServiceAccountantPassword, name: 'T_SRV_ACCTNT', key: 'ServiceAccountant' },
  { username: process.env.ServiceAccountingManagerUsername, password: process.env.ServiceAccountingManagerPassword, name: 'T_SRV_ACCMGR', key: 'ServiceAccountingManager' },
];*/

const usersToTest = [3, 4, 7, 8, 9, 10];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

// Select which users to test - Use variable names instead of numbers
//const usersToTest = ['DSISystemSpecialist', 'DSIManager', 'EEIAccountant', 'EEIAccountingManager', 'RetailAccountant', 'RetailSnrAccountant']; // Testing DSI, EEI, and RTL team IDs

// Filter credentials based on usersToTest
//const credentials = allCredentials.filter(cred => usersToTest.includes(cred.key));


// Run test for each credential set
for (const cred of credentials) {
  test(`testME2L - ${cred.name} (${cred.username})`, async ({ page }) => {
    //await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More'}).nth(0).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display Purchasing Documents by Supplier Tile' }).click();
  await page.locator('iframe[name="application-PurchaseOrder-displayBySupplier-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).click();
  await page.locator('iframe[name="application-PurchaseOrder-displayBySupplier-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).fill('1036701675');
  await page.locator('iframe[name="application-PurchaseOrder-displayBySupplier-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-PurchaseOrder-displayBySupplier-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});
}