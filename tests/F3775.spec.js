
import { test, expect } from '@playwright/test';

test('testF3775', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Bank Relationship Overview' }).click();
  await page.locator('[id="application-BankAccount-displayBRMOverview-component---mainView--ovpGlobalFilter-filterItemControlA_-_Parameter.P_DisplayCurrency-vhi"]').click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('NZ');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByText('NZD').click();
  await page.locator('[id="application-BankAccount-displayBRMOverview-component---mainView--ovpGlobalFilter-filterItemControlA_-_Parameter.P_KeyDate-input-vhi"]').click();
  await page.getByRole('listitem', { name: 'List Item . Selected . Is' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.waitForTimeout(30000);
});
