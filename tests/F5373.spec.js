import { test, expect } from '@playwright/test';

test('testF1077', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Group Accounting' }).click();
  await page.getByRole('link', { name: 'Display Article Document List' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('1911');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByLabel('December 2025 Monday Week 49').getByText('1').click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByLabel('10 December 2025 Wednesday').getByText('10').click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});