import { test, expect } from '@playwright/test';

test('testMMBE', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display Stock Overview Tile' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).fill('325946');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('0190');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});