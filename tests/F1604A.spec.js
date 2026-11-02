import { test, expect } from '@playwright/test';

test('testF1604A', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Group Accounting' }).click();
  await page.getByRole('link', { name: 'Manage Internal Orders (' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('[id="fin.co.internalorder.manage.v2::sap.suite.ui.generic.template.ListReport.view.ListReport::C_InternalOrderTP--template:::ListReportTable:::ColumnListItem-__clone320-imgNav"]').getByTitle('Navigation').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('textbox', { name: 'Controlling Area', exact: true }).click();
  await page.getByRole('textbox', { name: 'Controlling Area', exact: true }).fill('1000');
  await page.getByRole('textbox', { name: 'Controlling Area', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'Order Type', exact: true }).click();
  await page.getByRole('textbox', { name: 'Order Type', exact: true }).fill('0100');
  await page.getByRole('textbox', { name: 'Order Type', exact: true }).press('Enter');
  await page.getByLabel('Footer actions').getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(5000);
});