
import { test, expect } from '@playwright/test';

test('testZPS145', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_OHD_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Budget/Actual/Committed/Available');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByLabel('Budget/Actual/Committed/').click();
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).fill('000000000001');
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).fill('B.0218');
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).press('Enter');
   await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan version Required' }).fill('0');
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Object currency Required' }).fill('AUD');
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('textbox', { name: 'Object currency Required' }).press('Enter');
 
  await page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});