
import { test, expect } from '@playwright/test';

test('testF4022', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Periodic Processing Group' }).click();
  await page.getByRole('link', { name: 'Allocation Flow Tile' }).click();
   await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Cost Center:' }).click();
  await page.getByRole('textbox', { name: 'Cost Center:' }).fill('6600');
  await page.getByRole('textbox', { name: 'Cost Center:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Fiscal Period:' }).click();
  await page.getByRole('textbox', { name: 'Fiscal Period:' }).fill('1');
  await page.getByRole('textbox', { name: 'Fiscal Year:' }).click();
  await page.getByRole('textbox', { name: 'Fiscal Year:' }).fill('2026');
  await page.locator('[id="__bar1-filterItemControlA_-_Parameter.P_AllocationActualPlanVariant-arrow"]').click();
  await page.getByRole('option', { name: 'Actual (I)' }).locator('div').nth(2).click();
  await page.locator('[id="__bar1-filterItemControlA_-_Parameter.P_Ledger-vhi"]').click();
  await page.locator('div').filter({ hasText: /^0L$/ }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).nth(1).click();
  await page.waitForTimeout(2000);
  //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  //await page.evaluate(() => window.scrollBy(0, 500));
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(5000);
});