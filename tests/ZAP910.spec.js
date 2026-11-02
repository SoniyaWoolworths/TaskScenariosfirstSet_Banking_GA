import { test, expect } from '@playwright/test';

test('testZAP910', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Daily Exchange Rate Report' }).click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Exchange Rate Type Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Exchange Rate Type Required' }).fill('USX');
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Exchange Rate Type Required' }).press('Enter');
  
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Current Date Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('textbox', { name: 'Current Date Required' }).fill('11.06.2026');
  await page.locator('iframe[name="application-ZGUI-zap910-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});
