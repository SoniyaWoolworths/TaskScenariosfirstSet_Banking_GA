import { test, expect } from '@playwright/test';

test('testZKSB1', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Financial Group' }).click();
  await page.getByRole('link', { name: 'CCA: Actual Lines Archive' }).click();
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Center', exact: true }).fill('1002');
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Center', exact: true }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).click();
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).fill('20.01.2026');
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('group', { name: 'Posting Data' }).getByLabel('to').click();
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('group', { name: 'Posting Data' }).getByLabel('to').press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('group', { name: 'Posting Data' }).getByLabel('to').fill('20.01.2026');
  await page.locator('iframe[name="application-ZGUI-zksb1-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(20000);
});