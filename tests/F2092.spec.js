import { test, expect } from '@playwright/test';

test('testF2092', async ({ page }) => {
  /*await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Import Foreign Exchange Rates' }).click();
  await page.getByRole('button', { name: 'File: Browse...' }).click();
  await page.setInputFiles('input[type="file"]', 'C:\\Users\\1502543\\Desktop\\SONI Test\\testdata\\FxRateSet.xlsx');
  await page.getByRole('button', { name: 'Import' }).click();
  await page.waitForTimeout(10000);*/
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300');
  // 2. Enter username as T_BNK_ACCTNT
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  // 3. Enter password as Welcome@123
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  // 4. Click on logon
  await page.getByRole('button', { name: 'Log On' }).click();
  // 5. Click on masterdata
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  // 6. Click on import foreign exchange rates
  await page.getByRole('link', { name: 'Import Foreign Exchange Rates' }).click();
  // 7. Click on browse (file input)
  // 8. Select FxRateSet file under downloads in file explorer
  // 9. Click on open (handled by setInputFiles)
  await page.setInputFiles('input[type="file"]', 'C:\\Users\\1502543\\Downloads\\FxRateSet.xlsx');
  // 10. Click on import
  await page.getByRole('button', { name: /Import/i }).click();
  // Optional: wait for import to complete or confirmation message
  await page.waitForTimeout(50000);
});