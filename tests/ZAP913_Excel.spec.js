import { test, expect } from '@playwright/test';
const { getCredentialsForScenario } = require('../../Utils/credentialsReader');

// Load credentials for ZAP913 scenario from Excel
const testUsers = getCredentialsForScenario('ZAP913');

// Run test for each user
for (const user of testUsers) {
  test(`testZAP913 - ${user.description}`, async ({ page }) => {
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'User' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('listitem', { name: 'Transactions Group Accounting' }).click();
    await page.getByRole('link', { name: 'Overseas Payment - Auto' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).press('ControlOrMeta+a');
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).fill('');
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'Find...' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).fill('TPCBIGWONLINE');
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'OK' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'OK' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByLabel('Find', { exact: true }).getByRole('button', { name: 'Cancel' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByText('TPCBIGWONLINE').click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByText('TPCBIGWONLINE').click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).click();
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).fill('38101234');
    await page.locator('iframe[name="application-ZGUI-zap913-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
    await page.waitForTimeout(10000);
  });
}
