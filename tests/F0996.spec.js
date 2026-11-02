import { test, expect } from '@playwright/test';

test('testF0996', async ({ page }) => {
  // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Financial Banking' }).click();
  await page.getByRole('link', { name: 'Trial Balance Tile' }).click();
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
    await page.waitForTimeout(5000);
});