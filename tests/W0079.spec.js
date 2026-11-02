import { test, expect } from '@playwright/test';

test('testW0079', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Financial Group' }).click();
  await page.getByRole('link', { name: 'Profit Centers Plan/Actual' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().locator('#WD6A-input-btn').click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().locator('#WD0384 div').filter({ hasText: 'To select a row, press the' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('button', { name: 'OK Emphasized' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(30000);
});