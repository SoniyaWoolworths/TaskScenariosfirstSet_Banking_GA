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
//const usersToTest = [3, 4, 5, 6, 7, 8, 9, 10];
const usersToTest = [1]; // Only run users 1 and 2
//const usersToTest = [3]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testSM37DISP - ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User'}).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
   await page.locator('[title="More"]').nth(0).click({ force: true });
  await page.getByRole('listitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display And Monitor Background Jobs' }).click();
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name' }).click();
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name' }).fill('*');
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
 await page.waitForTimeout(5000);
});
 }