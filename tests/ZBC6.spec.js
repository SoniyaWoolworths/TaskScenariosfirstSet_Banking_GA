import { test, expect } from '@playwright/test';

test('testZBC6', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  await page.getByRole('link', { name: 'Interface Comparison ZBC6 Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-zbc6-iframe"]').contentFrame().getByRole('textbox', { name: 'IDOC Number' }).click();
  await page.locator('iframe[name="application-ZGUI-zbc6-iframe"]').contentFrame().getByRole('textbox', { name: 'IDOC Number' }).fill('7363611430');
  await page.locator('iframe[name="application-ZGUI-zbc6-iframe"]').contentFrame().getByRole('textbox', { name: 'IDOC Number' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zbc6-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});
