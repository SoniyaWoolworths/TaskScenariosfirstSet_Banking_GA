
import { test, expect } from '@playwright/test';

test('testVF03', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('display billing documents');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByLabel('Display Billing Documents Tile').click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('button', { name: 'Display Header Details' }).click();
  //await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('tab', { name: 'Header Partners' }).click();
//await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('tab', { name: 'Conditions' }).click();
//await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('tab', { name: 'Header Texts' }).click();
await page.waitForTimeout(5000);
await page.getByTitle('Header Partners').click();
});