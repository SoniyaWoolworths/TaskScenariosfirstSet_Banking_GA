import { test, expect } from '@playwright/test';

test('testZE16N', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_BNK_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('listitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Transaction with' }).click();
  await page.locator('iframe[name="application-ZGUI-ze16n-iframe"]').contentFrame().getByRole('textbox', { name: 'Table Name Required' }).fill('EKPO');
  await page.locator('iframe[name="application-ZGUI-ze16n-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ZGUI-ze16n-iframe"]').contentFrame().getByTitle('(F8)').click();
  // await page.locator('iframe[name="application-ZGUI-ze16n-iframe"]').contentFrame().getByTitle('Background Processing (Ctrl+F8)').click();
  // await page.locator('iframe[name="application-ZGUI-ze16n-iframe"]').contentFrame().getByTitle('Continue (Enter)').click();
  await page.waitForTimeout(5000);
});