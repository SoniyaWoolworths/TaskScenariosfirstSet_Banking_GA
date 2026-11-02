import { test, expect } from '@playwright/test';

test('testZSEARCH', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Tcode for Cust / Vendor Doc' }).click();
  await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('checkbox', { name: 'Open Items' }).click();
  await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('checkbox', { name: 'Cleared Items' }).click();
  await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('textbox', { name: 'Vendor Number' }).click();
  await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('textbox', { name: 'Vendor Number' }).fill('2288001');
  await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('textbox', { name: 'Vendor Number' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});
