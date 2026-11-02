import { test, expect } from '@playwright/test';

test('test(F0764)', async ({ page }) => {
  // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage Profit Center Groups' }).click();
  await page.waitForTimeout(2000);
  await page.locator('iframe[name="application-ProfitCenterGroup-manageProfitCenterGroups-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(2000);
  await page.locator('iframe[name="application-ProfitCenterGroup-manageProfitCenterGroups-iframe"]').contentFrame().getByRole('link', { name: 'Freestanding Liq VICFreestanding Liq VIC' }).click();
  await page.waitForTimeout(2000);
});