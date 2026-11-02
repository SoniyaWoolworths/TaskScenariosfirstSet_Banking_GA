import { test } from '@playwright/test';

test('testF1606', async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_BNK_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  await page.getByRole('link', { name: 'Post Currency Adjustments Tile' }).click();
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).fill('28');
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).click();
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).fill('28.10.2025');
  await page.getByRole('textbox', { name: 'Posting Date' }).click();
  await page.getByRole('textbox', { name: 'Posting Date' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Posting Date' }).fill('23.01.2026');
  await page.getByRole('textbox', { name: 'Journal Entry Type' }).click();
  await page.getByRole('textbox', { name: 'Journal Entry Type' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Journal Entry Type' }).fill('SA');
  await page.getByRole('textbox', { name: 'Journal Entry Type' }).press('Enter');
  await page.getByRole('textbox', { name: 'Reference' }).click();
  await page.getByRole('textbox', { name: 'Reference' }).fill('TEST011');
  await page.getByRole('textbox', { name: 'Header Text' }).click();
  await page.getByRole('textbox', { name: 'Header Text' }).fill('TEST011');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.GLAccount-__clone344-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.GLAccount-__clone344-input-inner"]').fill('400000');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.GLAccount-__clone344-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.GLAccount-__clone345-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.GLAccount-__clone345-input-inner"]').fill('400000');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.GLAccount-__clone345-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone344-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone344-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone344-input-inner"]').fill('10');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone345-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone345-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone345-input-inner"]').fill('10');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.itemPanel-__clone344-expandButton"]').click();
  await page.getByRole('textbox', { name: 'Tax Code :' }).click();
  await page.getByRole('textbox', { name: 'Tax Code :' }).fill('50');
  await page.getByRole('textbox', { name: 'Tax Code :' }).press('Enter');
  await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.itemPanel-__clone345-expandButton"]').click();
  await page.locator('[id="__xmlview114_codingBlockDetailsGroupElement_TaxCode-input-inner"]').click();
  await page.locator('[id="__xmlview114_codingBlockDetailsGroupElement_TaxCode-input-inner"]').fill('50');
  await page.locator('[id="__xmlview114_codingBlockDetailsGroupElement_TaxCode-input-inner"]').press('Enter');
  //await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--fin.acc.post.foreign.crcy.rem.btnPost-inner"]').getByRole('button', { name: 'Post' }).click();
  await page.locator('button:has-text("Post")').click();
  await page.getByRole('button', { name: 'OK' }).click();
 // await page.getByRole('button', { name: 'Post', exact: true }).click();
  //await page.getByRole('button', { name: 'OK', exact: true }).click();
  //await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.viewHeldDocument.Open-content"]').getByRole('button', { name: 'Hold Journal Entry', exact: true }).click();
  await page.getByRole('button', { name: 'Hold Journal Entry', exact: true }).click();
  await page.getByRole('button', { name: 'View', exact: true }).click();
  // ...existing code...

// Select the first row in the held documents table
await page.locator('[id="application-AccountingDocument-postCurrencyAdjustments-component---postCrcyAdjmts--sap.fin.gl.lib.posting.heldDocumentsTable-rows-row0-rowselecttext"]').click();
await page.getByRole('button', { name: 'Open', exact: true }).click();
// ...existing code...
  await page.waitForTimeout(10000);
});