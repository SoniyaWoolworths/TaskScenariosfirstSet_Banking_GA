
import { test, expect } from '@playwright/test';

test('testW0081', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Cost Centers Plan/Actual' }).click();
  // await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().locator('span').filter({ hasText: 'Contains 1 item23.09.2025' }).locator('span').nth(4).click();
  // await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByLabel('January 2026 Thursday Week 2').getByText('8').click();
  // await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('button', { name: 'OK Emphasized' }).click();
  await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(5000);
});
