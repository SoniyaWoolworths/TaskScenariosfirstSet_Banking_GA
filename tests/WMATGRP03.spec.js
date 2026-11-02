import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' },
  { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' },
];
const usersToTest = [2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testWMATGRP03 - ${cred.name} (${cred.username})`, async ({ page }) => {
    // US4 :
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).nth(0).click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Display Article Hierarchy Tile' }).click();
  await page.locator('iframe[name="application-ArticleHierarchy-display-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ArticleHierarchy-display-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-ArticleHierarchy-display-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
   await page.locator('iframe[name="application-ArticleHierarchy-display-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
   await page.waitForTimeout(5000);
});
}