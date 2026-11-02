import { test, expect } from '@playwright/test';

test('testKSBP', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300');
  // 2. Enter username as T_OHD_ACCTNT
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  // 3. Enter password as Welcome@123
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  // 4. Click on logon
  await page.getByRole('button', { name: 'Log On' }).click();
  // 5. Click on reporting financial page
  await page.getByRole('listitem', { name: 'Reporting - Financial Group' }).click();
  await page.getByRole('link', { name: 'Cost Centers: Plan Line Items' }).click();
  await page.locator('iframe[name="application-ZGUI-ksbp-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Center', exact: true }).click();
  await page.locator('iframe[name="application-ZGUI-ksbp-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Center', exact: true }).fill('8703');
  await page.locator('iframe[name="application-ZGUI-ksbp-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Center', exact: true }).press('Enter');
  //await page.locator('iframe[name="application-ZGUI-ksbp-iframe"]').contentFrame().getByRole('button', { name: 'Execute'}).click();
 await page.locator('iframe[name="application-ZGUI-ksbp-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
// Optionally, wait for results to load
  await page.waitForTimeout(10000);
  //await page.locator('iframe[name="application-ZGUI-ksbp-iframe"]').contentFrame().getByText('Controlling AreaCost Centerto').click();
});