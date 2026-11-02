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
  
  //const usersToTest = [3, 4, 7, 8, 9, 10]; 
  const usersToTest = [1]; 
  const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
    for (const cred of credentials) {
      test(`testF0717A- ${cred.name} (${cred.username})`, async ({ page }) => {
      await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
 
  // 1. Login into url
  // 2. Enter username as T_BNK_ACCTNT
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  // 3. Enter password as Welcome@123
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  // 4. Click on logon
  await page.getByRole('button', { name: 'Log On' }).click();
  // 5. Click on transactions
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  // 6. Click on manage journal entries under general ledger
  await page.getByRole('link', { name: 'Manage Journal Entries New' }).click();
  await page.waitForTimeout(5000);
  // 7. Click on create
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).fill('05.06.2026');
  await page.getByRole('textbox', { name: 'Reference' }).click();
  await page.getByRole('textbox', { name: 'Reference' }).fill('TEST00');
  await page.getByRole('textbox', { name: 'Header Text' }).click();
  await page.getByRole('textbox', { name: 'Header Text' }).fill('TEST00');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone718-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone718-input-inner"]').fill('650000');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone719-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone719-input-inner"]').fill('650000');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone719-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone718-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone718-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone718-input-inner"]').fill('20');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone719-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone719-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone719-input-inner"]').fill('20');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.itemPanel-__clone718-expandButton"]').click();
  await page.getByRole('textbox', { name: 'Cost Center :' }).click();
  await page.getByRole('textbox', { name: 'Cost Center :' }).fill('6600');
  await page.getByRole('textbox', { name: 'Cost Center :' }).press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.itemPanel-__clone719-expandButton"]').click();
  await page.locator('[id="__xmlview116_codingBlockGroupElement_CostCenter-input-inner"]').click();
  await page.locator('[id="__xmlview116_codingBlockGroupElement_CostCenter-input-inner"]').fill('6600');
  await page.locator('[id="__xmlview116_codingBlockGroupElement_CostCenter-input-inner"]').press('Enter');

  // Optionally, click Post if required
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  await page.waitForTimeout(5000);
});
    }