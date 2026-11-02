import { test, expect } from '@playwright/test';

test('testZXLREP', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_OHD_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transactions Group Accounting' }).click();
  await page.getByRole('link', { name: 'Interface Control Report' }).click();
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).click();
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).fill('04.01.2025');
   await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
   await page.waitForTimeout(30000);
});