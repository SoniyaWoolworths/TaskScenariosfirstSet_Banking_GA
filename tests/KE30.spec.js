import { test, expect } from '@playwright/test';

test('testKE30', async ({ page }) => {
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
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Run Profitability Report' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).fill('1000');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('cell', { name: 'ZPA-1000' }).getByRole('button').dblclick({ force: true });
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'PCA Hierarchy' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'PCA Hierarchy' }).fill('SMKT-SOPS');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Forecast Version Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Forecast Version Required' }).fill('600');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2025');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Period Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Period Required' }).fill('12');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Business Unit' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Business Unit' }).fill('FLP');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Business Unit' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Business Unit' }).fill('FLP');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Division' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Division' }).fill('SMKT');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Division' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Division' }).fill('SMKT');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Trading Department' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Trading Department' }).fill('010');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
});