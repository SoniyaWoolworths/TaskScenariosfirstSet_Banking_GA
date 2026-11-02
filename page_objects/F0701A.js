class SupplierBalancesPage {
  constructor(page, testName) {
    this.page = page;
    this.testName = testName;
  }

  async navigateToReportingReview() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/reporting-review-menu.png` });
  }

  async openDisplaySupplierBalances() {
    await this.page.getByRole('link', { name: 'Display Supplier Balances' }).first().click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/display-supplier-balances-opened.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.page.getByRole('textbox', { name: 'Company Code:' }).click();
    await this.page.getByRole('textbox', { name: 'Company Code:' }).fill(companyCode);
    await this.page.waitForTimeout(500);
    await this.page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async enterFiscalYear(fiscalYear) {
    await this.page.getByRole('textbox', { name: 'Fiscal Year:', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Fiscal Year:', exact: true }).fill(fiscalYear);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/fiscal-year-entered.png` });
  }

  async executeGo() {
    await this.page.getByRole('button', { name: 'Go', exact: true }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/supplier-balances-executed.png` });
  }

  async goBack() {
    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/navigated-back.png` });
  }

  async openManageSupplierLineItems() {
    await this.page.getByRole('link', { name: 'Manage Supplier Line Items' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/manage-supplier-line-items-opened.png` });
  }

  async enterCompanyCodeForLineItems(companyCode) {
    await this.page.getByRole('textbox', { name: 'Company Code:' }).click();
    await this.page.getByRole('textbox', { name: 'Company Code:' }).fill(companyCode);
    await this.page.waitForTimeout(500);
    await this.page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/line-items-company-code-entered.png` });
  }

  async selectClearingStatus(status) {
    await this.page.locator('[id="application-Supplier-manageLineItems-component---fin.ap.lineitems.display.s1View--fin.ap.lineitems.display.CustomSelectClearingStatus-label"]').click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('option', { name: status }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/clearing-status-selected.png` });
  }

  async executeLineItemsGo() {
    await this.page.getByRole('button', { name: 'Go', exact: true }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/line-items-executed.png` });
  }
}

module.exports = SupplierBalancesPage;
