class TransactionPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToTransaction() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.getByRole('menuitem', { name: 'Transaction' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-menu.png` });
  }

  async openTransactionWith() {
    await this.page.getByRole('link', { name: 'Transaction with' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-ze16n-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-with-opened.png` });
  }

  async enterTableName(tableName) {
    await this.frame.getByRole('textbox', { name: 'Table Name Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Table Name Required' }).fill(tableName);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/table-name-entered.png` });
  }

  async executeTransaction() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-executed.png` });
  }

  async clickOnline() {
    await this.frame.getByRole('button', { name: 'Online' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/online-clicked.png` });
  }
}

module.exports = TransactionPage;
