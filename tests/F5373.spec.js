import { test, expect } from '@playwright/test';

test('testF5373', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Display Article Document List' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('1911');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).fill('10.06.2026');
  await page.waitForTimeout(1000);
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(7000);
});