import { test, expect } from '@playwright/test';

test('testZFIN233', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  // 1. Login into url
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  // 3. Enter password as Welcome@123
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  // 4. Click on logon
  await page.getByRole('button', { name: 'Log On' }).click();
  // 5. Click on transactions
  await page.getByRole('listitem', { name: 'Transaction Banking Tile' }).click();
  // 6. Click on Upload program for WPAY Posting Rules ZFIN233
  await page.getByRole('link', { name: 'Upload program for WPAY' }).click();
  // 7. Click on update
  const frame = await page.frameLocator('iframe[name="application-ZGUI-zfin233-iframe"]');
  await frame.getByRole('radio', { name: 'Update' }).click();
  // 8. Click on upload
  await frame.getByRole('radio', { name: 'Upload' }).click();
  // 9. Click on directory and give the file path
  await frame.getByRole('textbox', { name: 'Directory' }).click();
  await frame.locator('#ls-inputfieldhelpbutton').click();
  await frame.locator('input[type="file"]').first().setInputFiles('testdata/ZFIN233.xls');
  //await frame.getByRole('textbox', { name: 'Directory' }).fill('C:\\Users\\1502543\\Desktop\\Playwright\\testdata\\ZFIN233.xls');
  // 10. Click on execute
  await frame.getByRole('button', { name: 'Execute' }).click();
  // 11. Wait for the success message
 // await expect(frame.getByText('Data Updated successfully in table', { exact: false })).toBeVisible({ timeout: 30000 });
});

