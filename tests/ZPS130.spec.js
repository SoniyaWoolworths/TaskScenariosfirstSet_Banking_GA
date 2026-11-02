
import { test, expect } from '@playwright/test';

const allCredentials = [
  { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' },
  { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' },
  { username: process.env.USERNAME3, password: process.env.PASSWORD3, name: 'User3' },
  { username: process.env.USERNAME4, password: process.env.PASSWORD4, name: 'User4' },
  { username: process.env.USERNAME5, password: process.env.PASSWORD5, name: 'User5' },
  { username: process.env.USERNAME6, password: process.env.PASSWORD6, name: 'User6' },
  { username: process.env.USERNAME7, password: process.env.PASSWORD7, name: 'User7' },
  { username: process.env.USERNAME8, password: process.env.PASSWORD8, name: 'User8' },
  { username: process.env.USERNAME9, password: process.env.PASSWORD9, name: 'User9' },
  { username: process.env.USERNAME10, password: process.env.PASSWORD10, name: 'User10' },
];
const usersToTest = [3, 4, 7, 8]; // Only run users 3, 4, 7, and 8
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testZPS130- ${cred.name} (${cred.username})`, async ({ page }) => {
    await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Actual/Committed/Total/Plan/Vari');
  await page.getByText('Actual/Committed/Total/Plan/Variance - ZPS130').click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).fill('000000000003');
  //await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByText('000000000003', { exact: true }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).fill('H.6966');
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).fill('');
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Variant' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('textbox', { name: 'Variant' }).fill('CG_ZPS130_ACT');
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
  await page.locator('iframe[name="application-ZGUI-zps130-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(5000);
});
}