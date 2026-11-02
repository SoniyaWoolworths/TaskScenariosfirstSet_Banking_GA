import { test, expect } from '@playwright/test';

test('testF3616', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_BNK_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Currency Exchange Rates Tile' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('gridcell', { name: 'Navigation' }).click();
  // await page.locator('[id="fin.gl.currencyexchangerates::sap.suite.ui.generic.template.ListReport.view.ListReport::C_CurrencyExchangeRateTP--template:::ListReportTable:::ColumnListItem-__clone292-imgNav"]').getByTitle('Navigation').click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('All changes will be lost.', { exact: true }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('textbox', { name: 'Exchange Rate Type', exact: true }).fill('USX');
  await page.getByText('USD Cross Rates', { exact: true }).click();
  await page.getByRole('textbox', { name: 'From Currency', exact: true }).click();
  await page.getByRole('textbox', { name: 'From Currency', exact: true }).fill('AUD');
  await page.getByRole('textbox', { name: 'From Currency', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'To Currency', exact: true }).click();
  await page.getByRole('textbox', { name: 'To Currency', exact: true }).fill('USD');
  await page.getByRole('textbox', { name: 'To Currency', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'Valid From', exact: true }).click();
  await page.getByRole('textbox', { name: 'Valid From', exact: true }).fill('21.01.2026');
  await page.getByRole('textbox', { name: 'Valid From', exact: true }).press('Enter');
  await page.getByRole('region', { name: 'Subsection' }).getByLabel('Select Options').click();
  await page.getByRole('option', { name: 'Direct' }).locator('div').nth(2).click();
  await page.getByRole('textbox', { name: 'Exchange Rate', exact: true }).click();
  await page.getByRole('textbox', { name: 'Exchange Rate', exact: true }).fill('1.48234');
   //await page.getByRole('region', { name: 'First column' }).getByLabel('Create').click();
  await page.getByRole('main', { name: 'Object details' }).getByLabel('Create').click();
  //await page.getByRole('button', { name: 'Create' }).click();
  await page.waitForTimeout(5000);
});