import { test, expect } from '@playwright/test';

test('testF1443A', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage Cost Centers Tile' }).click();
  await page.locator('[id="fin.co.costcenter.manage.v2::sap.suite.ui.generic.template.ListReport.view.ListReport::C_CostCenter--template:::ListReportTable:::ColumnListItem-__clone316-imgNav"] > .sapUiIconTitle').click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(5000);
});