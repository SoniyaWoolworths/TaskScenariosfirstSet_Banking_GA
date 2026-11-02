import { test, expect } from '@playwright/test';

test('testMM44', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('display change documents');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByLabel('Display Change Documents Tile').click();
  await page.locator('iframe[name="application-Article-displayChangeDocs-iframe"]').contentFrame().getByRole('textbox', { name: 'Article Required' }).click();
  await page.locator('iframe[name="application-Article-displayChangeDocs-iframe"]').contentFrame().getByRole('textbox', { name: 'Article Required' }).fill('321891');
  await page.locator('iframe[name="application-Article-displayChangeDocs-iframe"]').contentFrame().getByRole('textbox', { name: 'Article Required' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-Article-displayChangeDocs-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});
