class VendorLineItemPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToReporting() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/reporting-menu.png` });
  }

  async openVendorLineItemDisplay() {
    await this.page.getByRole('link', { name: 'Vendor Line Item Display' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/vendor-line-item-opened.png` });
  }

  async enterVendorAccount(vendorAccount) {
    await this.frame.getByRole('textbox', { name: 'Vendor Account' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Vendor Account' }).fill(vendorAccount);
    await this.frame.getByRole('textbox', { name: 'Vendor Account' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/vendor-account-entered.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code' }).click();
    await this.frame.getByRole('textbox', { name: 'Company Code' }).fill(companyCode);
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

module.exports = VendorLineItemPage;
