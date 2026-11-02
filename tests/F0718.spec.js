import { test, expect } from '@playwright/test';

test('testF0718', async ({ page }) => {
  // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transactions Group Accounting' }).click();
  await page.getByRole('link', { name: 'Manage Journal Entries New' }).click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--listReportFilter-filterItemControl_BASIC-DocumentDate-input-vhi"]').click();
  await page.locator('div').filter({ hasText: /^Date$/ }).nth(1).click();
  //await page.getByText('16', { exact: true }).click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--template::IconTabBar--header-head"]').click();
  await page.getByText('Company CodeContains 1 token 1000 (Woolworths Group Limited)Ledger GroupNo').click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--listReportFilter-filterItemControl_BASIC-DocumentDate-input-vhi"]').click();
  await page.locator('div').filter({ hasText: /^Today$/ }).nth(2).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: '9385817845' }).click();
  await page.locator('[id="__link97"]').click();
  await page.getByRole('link', { name: 'Post General Journal Entries (For Verification)' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: '9385817845' }).click();
  await page.getByRole('link', { name: 'Post General Journal Entries', exact: true }).click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.tabHeader.documentDate-datePicker-icon"]').click();
  await page.getByText('16', { exact: true }).click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.tabHeader.accountingDocumentType-input-vhi"]').click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('SB');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('div').filter({ hasText: /^Journal Entry TypeJE Type Name$/ }).first().click();
  await page.locator('div').filter({ hasText: /^SB$/ }).click();
  await page.getByRole('textbox', { name: 'Transaction Currency' }).click();
  await page.getByRole('textbox', { name: 'Transaction Currency' }).fill('test');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone770-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone770-input-inner"]').fill('40');
  await page.getByText('400000').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone770-input-inner"]').fill('400000 (Sales)');
  await page.getByText('Total Debit:0.00').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone771-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone771-input-inner"]').fill('40');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone771-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone770-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone770-input-inner"]').fill('10');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone771-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone771-input-inner"]').fill('10');
});
