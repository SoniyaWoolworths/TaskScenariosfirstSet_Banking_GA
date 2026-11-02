import { test, expect } from '@playwright/test';

test('testME53N', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transactions Group Accounting' }).click();
  await page.getByRole('link', { name: 'Display and Maintain Purchase' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Close' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Document Overview On' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Selection variant' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByText('Purchase orders', { exact: true }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Document' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Document' }).fill('3700034128');
  //await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByText('3700034128', { exact: true }).click();
  const frame = await page.frameLocator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayAdvanced-iframe"]').contentFrame().getByTitle('Expand Node').click();
  await frame.getByRole('button', { name: '3700034128' }).dblclick();
  await page.waitForTimeout(10000);
});
