import { test, expect } from '@playwright/test';

test('testF3516', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage Profit Centers Tile' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('row', { name: 'Item Selection 100 NSW -NORTH' }).getByLabel('Item Selection').click();
  await page.locator('[id="fin.gl.profitcenter.manage.v2::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ProfitCenterTP--template:::ListReportTable:::ColumnListItem-__clone274-TypeCell"]').getByTitle('Navigation').click();
  await page.getByRole('option', { name: 'Indicators' }).click();
  await page.getByRole('option', { name: 'Organizational Unit' }).click();
  await page.getByRole('option', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Communication' }).click();
  await page.getByRole('option', { name: 'Company Codes' }).click();
  await page.getByRole('option', { name: 'Translation' }).click();
  await page.getByRole('option', { name: 'Change Log' }).click();
  await page.waitForTimeout(5000);
});