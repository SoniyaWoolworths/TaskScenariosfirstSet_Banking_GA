import { test, expect } from '@playwright/test';

test('testZPUR0450', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'GR IR Unmatched TD wise' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).fill('22.10.2025');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Last GR mvmt. date' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Last GR mvmt. date' }).fill('01.01.2021');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).fill('03.11.2024');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout Required' }).fill('/GRIRCLEAR_S');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
  //await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: '102909790' }).click();
  // await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: '102909790' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByText('102909790').dblclick();
  await page.waitForTimeout(5000);
});