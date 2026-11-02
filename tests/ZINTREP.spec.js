import { test, expect } from '@playwright/test';

test('testZINTREP', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  await page.getByRole('link', { name: 'Interface Report ZINTREP Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Interface Identifier' }).fill('WPAYFEES');
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout' }).fill('/ZXLREP');
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByLabel('January 2026 Wednesday Week 2').getByText('7').click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});