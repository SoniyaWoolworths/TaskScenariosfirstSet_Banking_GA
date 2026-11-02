class CustomerLineItemPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToReportingReview() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/reporting-review-menu.png` });
  }

  async openCustomerLineItems() {
    await this.page.getByRole('link', { name: 'Customer Line Items ZFBL5N' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfbl5n-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/customer-line-items-opened.png` });
  }

  async enterCustomerAccount(customerAccount) {
    await this.frame.getByRole('textbox', { name: 'Customer Account' }).fill(customerAccount);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Customer Account' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/customer-account-entered.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code' }).fill(companyCode);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async executeSearch() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/search-executed.png` });
  }
}

module.exports = CustomerLineItemPage;
