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

// const usersToTest = [3, 4]; 
const usersToTest = [2];


const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testF1598 - ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('button', { name: 'More' }).nth(0).click();
    await page.waitForTimeout(2000);
    await page.getByRole('menuitem', { name: 'Transaction' }).click();
    await page.getByRole('link', { name: 'Manage Recurring Journal' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Create New Recurring Journal' }).click();
    await page.waitForTimeout(5000);
    await page.locator('#application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sfHeaderTransactionCurrency-input-vhi').click();
    await page.getByRole('searchbox', { name: 'Search' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('AUD');
    await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
    await page.getByText('AUD', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Reference' }).click();
    await page.getByRole('textbox', { name: 'Reference' }).fill('test11');
    await page.getByRole('textbox', { name: 'Header Text' }).click();
    await page.getByRole('textbox', { name: 'Header Text' }).fill('test11');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.GLAccount-__clone339-input-inner"]').click();
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.GLAccount-__clone339-input-inner"]').fill('100');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.GLAccount-__clone339-input-inner"]').press('Enter');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.GLAccount-__clone340-input-inner"]').click();
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.GLAccount-__clone340-input-inner"]').fill('100');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.GLAccount-__clone340-input-inner"]').press('Enter');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone339-input-inner"]').click();
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone339-input-inner"]').press('ControlOrMeta+a');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone339-input-inner"]').fill('100');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone340-input-inner"]').click();
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone340-input-inner"]').press('ControlOrMeta+a');
    await page.locator('[id="application-RecurringAccountingDocument-manage-component---CreateRecurringJournalEntryView--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone340-input-inner"]').fill('100');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(30000);
  });
}