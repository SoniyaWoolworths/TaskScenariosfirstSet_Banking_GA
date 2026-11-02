import { test, expect } from '@playwright/test';

test('testKSB5N', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME2);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD2);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('display actual cost documents');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByLabel('Display Actual Cost Documents').click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('textbox', { name: 'Period' }).click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('textbox', { name: 'Period' }).fill('001');
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Yr' }).click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Yr' }).fill('2026');
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByText('6263778901').click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('button', { name: 'Select (F2)' }).click();
  await page.locator('iframe[name="application-AccountingDocument-displayActualControllingDocuments-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
});