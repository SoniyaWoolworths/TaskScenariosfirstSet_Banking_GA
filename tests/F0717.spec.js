import { test, expect } from '@playwright/test';

test('testF0717', async ({ page }) => {
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
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.tabHeader.documentDate-datePicker-icon"]').click();
  await page.getByText('16', { exact: true }).click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.sfHeaderTransactionCurrency-input-vhi"]').click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('AUD');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.locator('div').filter({ hasText: /^Australian Dollar$/ }).click();
  await page.getByRole('textbox', { name: 'Reference' }).click();
  await page.getByRole('textbox', { name: 'Reference' }).fill('test');
  await page.getByRole('textbox', { name: 'Header Text' }).click();
  await page.getByRole('textbox', { name: 'Header Text' }).fill('test');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone926-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone926-input-inner"]').fill('100');
  await page.getByText('100002').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone927-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone927-input-inner"]').fill('100');
  await page.locator('[id="__label59-application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone927-input-2"]').getByText('100').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone926-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone926-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone926-input-inner"]').fill('100');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone927-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone927-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone927-input-inner"]').fill('100');
  //await page.getByRole('button', { name: 'Post' }).click();
  await page.locator('button:has-text("Post")').click();
  await page.getByRole('button', { name: 'OK' }).click();
 await page.getByRole('button', { name: 'Back' }).click();
 await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--listReport-Standard-DocumentDate-header-bdi"]').click();
  await page.getByText('Filter', { exact: true }).click();
  await page.getByLabel('Open Picker').click();
  await page.getByText('16', { exact: true }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('row', { name: 'Item Selection 3814045876 SB' }).getByLabel('Item Selection').click();
  await page.getByRole('button', { name: 'Reverse' }).click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--MassReverseDialog--reversalReasonInput-arrow"]').click();
  await page.getByRole('option', { name: 'Reverse Error in Closed Period' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--template:::ListReportTable:::QuickVariantSelectionXColumnListItem:::sQuickVariantKey::Standard-__clone721-TypeCell"]').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  
});