import { test, expect } from '@playwright/test';

test('testZXLREP', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Interface Control Report' }).click();
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).click();
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).fill('');
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByText('0000007316118757', { exact: true }).click();
   await page.locator('iframe[name="application-ZGUI-zxlrep-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
  
});