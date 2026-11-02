
import { test, expect } from '@playwright/test';

test('testF2223G/Laccount', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_BNK_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  await page.getByRole('link', { name: 'Reset Cleared Items Tile' }).click();
  await page.getByRole('textbox', { name: 'Posting Date:' }).click();
  await page.getByRole('textbox', { name: 'Posting Date:' }).fill('05.01.2026');
  await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Clearing Journal Entry:', exact: true }).click();
  await page.getByRole('textbox', { name: 'Clearing Journal Entry:', exact: true }).fill('3814190150');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.waitForTimeout(40000);
  await page.getByTitle('Navigation', { exact: true }).click();
  await page.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.getByRole('button', { name: 'OK', exact: true }).click();
  await page.waitForTimeout(5000);


});