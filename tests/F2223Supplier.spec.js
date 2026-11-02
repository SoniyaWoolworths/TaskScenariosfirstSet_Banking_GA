import { test, expect } from '@playwright/test';

test('testF2223Supplier', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  await page.getByRole('link', { name: 'Reset Cleared Items Tile' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('2000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Clearing Journal Entry:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Clearing Journal Entry:', exact: true }).fill('1039095252');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.waitForTimeout(40000);
  await page.getByTitle('Navigation', { exact: true }).click();
    await page.getByRole('button', { name: 'Reset', exact: true }).click();
    await page.waitForTimeout(5000);
});