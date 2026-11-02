import { test, expect } from '@playwright/test';

test('testF1974', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'WBS Element Overview Tile' }).click();
  await page.getByRole('textbox', { name: 'WBS Element:' }).click();
  await page.getByRole('textbox', { name: 'WBS Element:' }).fill('H.7002');
  await page.getByRole('textbox', { name: 'WBS Element:' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('button', { name: 'Row Actions Details' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('option', { name: 'Status' }).click();
  await page.getByRole('option', { name: 'Project' }).click();
  await page.getByRole('option', { name: 'Milestones' }).click();
  await page.getByRole('option', { name: 'Networks/Orders' }).click();
  await page.getByRole('option', { name: 'Purchase Document Items' }).click();
  await page.getByRole('option', { name: 'Network Activities' }).click();
  await page.getByRole('option', { name: 'User Fields' }).click();
  await page.waitForTimeout(5000);
});