import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('P&L');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'P&L Plan/Actual Tile' }).click();
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).click();
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('0');
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-CompanyCode-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(10000);
});