import { test, expect } from '@playwright/test';

test('test(F0731A)', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage G/L Account Master' }).click();
  await page.getByRole('textbox', { name: 'Chart of Accounts:' }).click();
  await page.getByRole('textbox', { name: 'Chart of Accounts:' }).fill('1000');
  await page.getByText('WoW Chart of Accounts').click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();

});