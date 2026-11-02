class StockCardInventoryPage {
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

  async openStockCardInventory() {
    await this.page.getByRole('link', { name: 'Stock card and inventory' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zpur0136-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/stock-card-inventory-opened.png` });
  }

  async enterArticle(article) {
    await this.frame.getByRole('textbox', { name: 'Article', exact: true }).fill(article);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/article-entered.png` });
  }

  async enterSite(site) {
    await this.frame.getByRole('textbox', { name: 'Site' }).click();
    await this.frame.getByRole('textbox', { name: 'Site' }).fill(site);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/site-entered.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).fill(companyCode);
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async enterSelectionDateFrom(selectionDateFrom) {
    await this.frame.getByRole('textbox', { name: 'Selection date Required' }).fill(selectionDateFrom);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/selection-date-from-entered.png` });
  }

  async enterSelectionDateTo(selectionDateTo) {
    await this.frame.getByRole('textbox', { name: 'to Required' }).click();
    await this.frame.getByRole('textbox', { name: 'to Required' }).fill(selectionDateTo);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/selection-date-to-entered.png` });
  }

  async executeReport() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/report-executed.png` });
  }
}

module.exports = StockCardInventoryPage;
