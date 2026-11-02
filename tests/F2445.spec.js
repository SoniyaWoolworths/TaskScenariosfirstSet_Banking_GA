import { test, expect } from '@playwright/test';

test('testF2445', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transactions Group Accounting' }).click();
  await page.getByRole('link', { name: 'General Ledger Overview Tile' }).click();
  await page.getByLabel('Open Picker').click();
  await page.getByText('18').click();
  await page.locator('#application-GeneralLedgerOverview-display-component---mainView--ovpGlobalFilter-filterItemControl_BASIC-GLAccountHierarchy-vhi').click();
  await page.getByText('/1000/1000-OPS').click();
  await page.locator('#application-GeneralLedgerOverview-display-component---mainView--ovpGlobalFilter-filterItemControl_BASIC-Ledger-vhi').click();
  await page.getByText('0L').click();
  await page.getByRole('button', { name: 'Go', exact: true }).nth(0).click();
  await page.getByRole('button', { name: 'Collapse Header' }).click();
  await page.waitForTimeout(5000);
});