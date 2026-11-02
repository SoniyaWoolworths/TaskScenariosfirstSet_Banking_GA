class ItemInventoryStatusPage {
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

  async openItemInventoryStatusReport() {
    await this.page.getByRole('link', { name: 'Item Inventory Status Report' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zpur0351-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/item-inventory-status-opened.png` });
  }

  async enterArticle(article) {
    await this.frame.getByRole('textbox', { name: 'Article Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Article Required' }).fill(article);
    await this.frame.getByRole('textbox', { name: 'Article Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/article-entered.png` });
  }

  async enterSite(site) {
    await this.frame.getByRole('textbox', { name: 'Site' }).click();
    await this.frame.getByRole('textbox', { name: 'Site' }).fill(site);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/site-entered.png` });
  }

  async enterPurchaseOrganization(purchaseOrganization) {
    await this.frame.getByRole('textbox', { name: 'Purch. Organization' }).click();
    await this.frame.getByRole('textbox', { name: 'Purch. Organization' }).fill(purchaseOrganization);
    await this.frame.getByRole('textbox', { name: 'Purch. Organization' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/purchase-organization-entered.png` });
  }

  async enterServerGroup(serverGroup) {
    await this.frame.getByRole('textbox', { name: 'Server Group Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Server Group Required' }).fill(serverGroup);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/server-group-entered.png` });
  }

  async executeReport() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/report-executed.png` });
  }
}

module.exports = ItemInventoryStatusPage;
