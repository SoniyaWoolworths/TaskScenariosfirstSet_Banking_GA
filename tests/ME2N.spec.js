
import { test, expect } from '@playwright/test';

test('testME2N', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('display purchasing documents by number');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByLabel('Display Purchasing Documents').click();
  await page.locator('iframe[name="application-PurchasingDocument-displayByDocumentNumber-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing document' }).click();
  await page.locator('iframe[name="application-PurchasingDocument-displayByDocumentNumber-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing document' }).fill('7075297819');
  await page.locator('iframe[name="application-PurchasingDocument-displayByDocumentNumber-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing document' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-PurchasingDocument-displayByDocumentNumber-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});