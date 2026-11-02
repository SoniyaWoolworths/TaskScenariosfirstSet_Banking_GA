import { test, expect } from '@playwright/test';

test('testFAGL_FCV', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_BNK_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  await page.getByRole('link', { name: 'Perform Foreign Currency' }).click();
  await page.locator('iframe[name="application-ClosingReport-performForeignCurrValuation-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ClosingReport-performForeignCurrValuation-iframe"]').contentFrame().getByText('S4_ERROR').first().click();
  await page.locator('iframe[name="application-ClosingReport-performForeignCurrValuation-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ClosingReport-performForeignCurrValuation-iframe"]').contentFrame().getByRole('radio', { name: 'Test Run (No Database Update)' }).click();
  //await page.locator('iframe[name="application-ClosingReport-performForeignCurrValuation-iframe"]').contentFrame().getByRole('radio', { name: 'Update Run' }).click();
  await page.locator('iframe[name="application-ClosingReport-performForeignCurrValuation-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(30000);
});