import { test, expect } from '@playwright/test';

test('testF4023', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Financial Banking' }).click();
  await page.getByText('Display Actual Cost DocumentsDisplay Line ItemsCost AccountingGR55 Execute').click();
  await page.getByRole('link', { name: 'Display Line Items Cost' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Cost Center:' }).click();
  await page.getByRole('textbox', { name: 'Cost Center:' }).fill('6600');
  await page.getByRole('textbox', { name: 'Cost Center:' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByText('Cost Center: 6600 - HO').click();
  await page.getByRole('link', { name: 'Journal Entry 3000023726' }).click();
  await page.getByRole('link', { name: 'Manage Journal Entries - New' }).click();
  await page.getByRole('option', { name: 'Line Items' }).click();
  await page.getByRole('option', { name: 'Taxes' }).click();
  await page.getByRole('option', { name: 'Notes' }).click();
  await page.getByRole('option', { name: 'Attachments' }).click();
});
