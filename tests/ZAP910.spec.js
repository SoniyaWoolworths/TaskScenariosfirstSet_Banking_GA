import { test, expect } from '@playwright/test';

test('testZAP910', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Daily Exchange Rate Report' }).click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Exchange Rate Type Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Exchange Rate Type Required' }).fill('USX');
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Exchange Rate Type Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByTitle('Previous Month').click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByLabel('November 2025 Friday Week 46').getByText('14').click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});
