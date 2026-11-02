import { test, expect } from '@playwright/test';

test('testSP01', async ({ page }) => {
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
  await page.getByRole('listitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'SP01 Display Spool Requests' }).click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('textbox', { name: 'Created by' }).click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('textbox', { name: 'Created by' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('textbox', { name: 'Created by' }).fill('');
  const frame = await page.frameLocator('iframe[name="application-ZGUI-sp01-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  
  await frame.getByRole('button', { name: 'Display' }).click();

  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('checkbox').first().dblclick();

  // await frame.getByText('632675').dblclick();
  await page.waitForTimeout(5000);
});