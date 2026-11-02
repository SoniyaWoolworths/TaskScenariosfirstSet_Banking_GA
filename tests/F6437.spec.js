import { test, expect } from '@playwright/test';

test('testF6437', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Manage Banks Master Data Tile' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('gridcell', { name: 'Navigation' }).first().click();
  // await page.locator('iframe[name="application-BankList-manage-iframe"]').contentFrame().getByRole('gridcell', { name: 'Navigation' }).first().click();
  // await page.locator('[id="bf.bk.bank.manage::BankList--fe::table::Bank::LineItem-innerTableRow-__clone335-TypeCell"]').click();
  // await page.locator('[id="bf.bk.bank.manage::BankList--fe::table::Bank::LineItem-innerTableRow-__clone281-imgNav"]').getByTitle('Navigation').click();
  await page.getByRole('option', { name: 'Address', exact: true }).click();
  await page.getByRole('option', { name: 'International Address Versions' }).click();
  await page.getByRole('option', { name: 'Change History' }).click();
  await page.waitForTimeout(5000);

});