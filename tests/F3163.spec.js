
import { test, expect } from '@playwright/test';

test('testF3163', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Master Data Banking Tile' }).click();
  await page.getByRole('link', { name: 'Manage Business Partner' }).click();
  await page.locator('[id="mdm.md.businesspartner.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_BusinessPartner--listReportFilter-filterItemControl_BASIC-BusinessPartnerForEdit-vhi"]').click();
  await page.locator('[id="mdm.md.businesspartner.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_BusinessPartner--listReportFilter-filterItemControl_BASIC-BusinessPartnerForEdit-valueHelpDialog-table-rowsel0"]').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).nth(0).click();
  await page.locator('[id="mdm.md.businesspartner.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_BusinessPartner--template:::ListReportTable:::ColumnListItem-__clone376-imgNav"]').getByTitle('Navigation').click();
  await page.getByRole('option', { name: 'Roles' }).click();
  await page.getByRole('button', { name: 'Address', exact: true }).click();
  await page.getByRole('button', { name: 'Address-Independent' }).click();
  await page.getByRole('option', { name: 'Bank Accounts' }).click();
  await page.getByRole('option', { name: 'Payment Cards' }).click();
  await page.getByRole('button', { name: 'Identification' }).click();
  await page.getByRole('option', { name: 'Contacts' }).click();
  await page.getByRole('option', { name: 'Relationships' }).click();
  await page.getByRole('option', { name: 'Classification' }).click();
  await page.getByRole('option', { name: 'Attachments' }).click();
  await page.waitForTimeout(2000);
});