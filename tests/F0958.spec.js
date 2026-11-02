import { test, expect } from '@playwright/test';

test('testF0958', async ({ page }) => {
  // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Financial Group' }).click();
  await page.getByRole('link', { name: 'P&L Actuals Tile' }).click();
   await page.locator('iframe[name="application-CompanyCode-analyzeActualsCDSQ-iframe"]').contentFrame().locator('#WD5E-icon').click();
  await page.locator('iframe[name="application-CompanyCode-analyzeActualsCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year of Ledger Required' }).click();
  await page.locator('iframe[name="application-CompanyCode-analyzeActualsCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year of Ledger Required' }).fill('2026');
  await page.locator('iframe[name="application-CompanyCode-analyzeActualsCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year of Ledger Required' }).press('Enter');
  await page.locator('iframe[name="application-CompanyCode-analyzeActualsCDSQ-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(2000);
});