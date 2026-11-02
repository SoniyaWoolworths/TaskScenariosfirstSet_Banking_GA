import { test, expect } from '@playwright/test';

test('testZPS140', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_BNK_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Budget/Actual/Committed' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).fill('000000000001');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).fill('H.3924');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan version Required' }).fill('1');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('radio', { name: 'Graphical report output' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).fill('H.2085');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});