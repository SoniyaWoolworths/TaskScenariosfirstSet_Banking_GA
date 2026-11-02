import { test, expect } from '@playwright/test';

test('testF4973', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage Bank Account Hierarchies Tile' }).click();
  await page.getByLabel('Select Options').click();
  await page.getByRole('option', { name: 'Item Selection Active' }).locator('div').nth(4).click();
  await page.getByRole('textbox', { name: 'Valid From/To:' }).click();
  await page.getByRole('textbox', { name: 'Valid From/To:' }).fill('22.12.2025-31.12.2025');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.waitForTimeout(5000);
});