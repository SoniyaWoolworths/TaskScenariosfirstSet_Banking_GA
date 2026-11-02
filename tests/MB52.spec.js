import { test, expect } from '@playwright/test';

test('testMB52', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Group Accounting' }).click();
  await page.getByRole('link', { name: 'Display Warehouse Stock Tile' }).click();
  await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).click();
  await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).fill('4780');
  await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).press('Enter');
  await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('7000');
  await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  //await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Select (F8)' }).click();
  //await page.locator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  const frame = await page.frameLocator('iframe[name="application-Material-displayWarehouseStockInWebGUI-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});