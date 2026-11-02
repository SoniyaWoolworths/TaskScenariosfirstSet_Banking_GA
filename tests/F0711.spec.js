import { test, expect } from '@playwright/test';

test('test(F0711)', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Manage Customer Line Items' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Journal Entry  9403272746' }).click();
  await page.getByRole('link', { name: 'Journal Entry Analyzer' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: 'Journal Entry  9403272746' }).click();
  await page.getByRole('link', { name: 'Manage Journal Entries - New' }).click();
  await page.getByRole('option', { name: 'Line Items' }).click();
  await page.getByRole('option', { name: 'Related Documents' }).click();
  await page.getByRole('option', { name: 'Notes' }).click();
  await page.getByRole('option', { name: 'Attachments' }).click();
  await page.waitForTimeout(10000);
});