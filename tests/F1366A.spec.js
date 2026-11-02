import { test, expect } from '@playwright/test';

test('testF1366A', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage Bank Accounts Tile' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('[id="fin.cash.brm.bankaccount.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_BankAccountTP--template:::ListReportTable:::ColumnListItem-__clone316-imgNav"]').getByTitle('Navigation').click();
  await page.getByRole('option', { name: 'Bank Relationship' }).click();
  await page.getByRole('option', { name: 'House Bank Account' }).click();
  await page.getByRole('option', { name: 'Multi-Language Descriptions' }).click();
  await page.waitForTimeout(5000);
});