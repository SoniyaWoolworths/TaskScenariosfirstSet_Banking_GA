
import { test, expect } from '@playwright/test';

test('testF0859', async ({ page }) => {
  // US4 : 
    await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

    // TS4 :
    // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
    
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Process Supplier Invoice' }).click();
  await page.getByRole('textbox', { name: 'Posting Date' }).click();
  await page.getByRole('textbox', { name: 'Posting Date' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Posting Date' }).fill('');
  await page.getByRole('textbox', { name: 'Posting Date' }).click();
  await page.getByRole('textbox', { name: 'Posting Date' }).fill('17.12.2025');
  await page.getByRole('button', { name: 'Check' }).click();
  await page.waitForTimeout(5000);
});

