class PurchaseOrderPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async searchForTransaction(searchTerm) {
    await this.page.getByRole('button', { name: 'Open Search' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('searchbox', { name: 'Search' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('searchbox', { name: 'Search' }).fill(searchTerm);
    await this.page.getByText(searchTerm).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-searched.png` });
  }

  async openZPUR0061() {
    this.frame = this.page.locator('iframe[name="application-ZGUI-zpur0061-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/zpur0061-opened.png` });
  }

  async enterSourceFileDate(sourceFileDate) {
    await this.frame.getByRole('textbox', { name: 'Source File Date Required' }).fill(sourceFileDate);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/source-file-date-entered.png` });
  }

  async enterSalesOrg(salesOrg) {
    await this.frame.getByRole('textbox', { name: 'Sales Org Required' }).fill(salesOrg);
    await this.frame.getByRole('textbox', { name: 'Sales Org Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/sales-org-entered.png` });
  }

  async enterSite(site) {
    await this.frame.getByRole('textbox', { name: 'Site', exact: true }).click();
    await this.frame.getByRole('textbox', { name: 'Site', exact: true }).fill(site);
    await this.frame.getByRole('textbox', { name: 'Site', exact: true }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/site-entered.png` });
  }

  async enterPostingDate(postingDate) {
    await this.frame.getByRole('textbox', { name: 'Posting Date Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Posting Date Required' }).fill(postingDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/posting-date-entered.png` });
  }

  async enterStorageLocation(storageLocation) {
    await this.frame.getByRole('textbox', { name: 'Storage Location Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Storage Location Required' }).fill(storageLocation);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/storage-location-entered.png` });
  }

  async executeProcess() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/process-executed.png` });
  }
}

module.exports = PurchaseOrderPage;
