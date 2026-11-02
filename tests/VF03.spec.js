import { test, expect } from '@playwright/test';

test('testVF03', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transactions Group Accounting' }).click();
  await page.getByRole('link', { name: 'Display Billing Documents Tile' }).click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(5000);
});





