
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
//const usersToTest = [3, 4, 9, 10];
const usersToTest = [2]; // Only run users 1 and 2
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testZPUR0292- ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('button', { name: 'More' }).click();
    await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
    await page.getByRole('link', { name: 'Unmatched Goods Receipt' }).nth(0).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('radio', { name: 'Detail report' }).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('radio', { name: 'Detail report' }).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).fill('200495');
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).press('Enter');
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting date' }).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting date' }).fill('10.06.2026');
    await page.waitForTimeout(1000);
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
    /*await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByLabel('January 2026', { exact: true }).getByLabel('January 2026 Thursday Week 1').getByText('1').click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
    await page.locator('iframe[name="application-ZGUI-zpur0292-iframe"]').contentFrame().getByLabel('January 2026 Tuesday Week 4 Today').getByText('20').click();*/
    await page.waitForTimeout(10000);
  });
}
