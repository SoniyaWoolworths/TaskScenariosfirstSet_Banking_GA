
import { test, expect } from '@playwright/test';

test('testF1060A', async ({ page }) => {
  // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Supplier Invoices List' }).click();
  await page.getByText('5190173584/').click();
  await page.getByRole('option', { name: 'Purchasing Document References' }).click();
  await page.getByRole('option', { name: 'Tax' }).click();
  await page.getByRole('option', { name: 'Payment' }).click();
 await page.getByRole('option', { name: 'Unplanned Delivery Costs' }).click();
await page.getByRole('option', { name: 'Note' }).click();
  await page.getByRole('option', { name: 'Attachments' }).click();
  await page.waitForTimeout(5000);
});