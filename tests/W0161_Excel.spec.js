import { test, expect } from '@playwright/test';
const { getCredentialsForScenario } = require('../../Utils/credentialsReader');

// Load credentials for W0161 scenario from Excel (only 3 users)
const testUsers = getCredentialsForScenario('W0161');

// Run test for each user
for (const user of testUsers) {
  test(`testW0161 - ${user.description}`, async ({ page }) => {
    await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'User' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.locator('[title="More"]').nth(0).click({ force: true });
    await page.getByRole('listitem', { name: 'Reporting - Financial' }).click();
    await page.getByRole('link', { name: 'Balance Sheet/Income' }).click();
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).click();
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).fill('ZW01');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).press('Enter');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).click();
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('ControlOrMeta+a');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Delete');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('0');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('0');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
    await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByTitle('Data Analysis').click();
    await page.waitForTimeout(5000);
  });
}
