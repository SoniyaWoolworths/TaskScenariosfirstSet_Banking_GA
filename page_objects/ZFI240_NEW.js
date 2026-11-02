class TransactionListPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToReportingFinancial() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/reporting-financial-menu.png` });
  }

  async openTransactionListCostSell() {
    await this.page.getByRole('link', { name: 'Transaction List - Cost/Sell - New ZFI240_NEW Tile' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfi240_new-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-list-opened.png` });
  }

  async enterProfitCentre(profitCentre) {
    await this.frame.getByRole('textbox', { name: 'Profit centre', exact: true }).click();
    await this.frame.getByRole('textbox', { name: 'Profit centre', exact: true }).fill(profitCentre);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/profit-centre-entered.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).fill(companyCode);
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async enterAccountGroup(accountGroup) {
    await this.frame.getByRole('textbox', { name: 'Account Group' }).click();
    await this.frame.getByRole('textbox', { name: 'Account Group' }).fill(accountGroup);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/account-group-entered.png` });
  }

  async enterPostingDate(postingDate) {
    await this.frame.getByRole('textbox', { name: 'Posting Date Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Posting Date Required' }).fill(postingDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/posting-date-entered.png` });
  }

  async enterDisplayLayoutVariant(layoutVariant) {
    await this.frame.getByRole('textbox', { name: 'Display Layout Variant' }).click();
    await this.frame.getByRole('textbox', { name: 'Display Layout Variant' }).fill(layoutVariant);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/layout-variant-entered.png` });
  }

  async selectOnlineDataOnly() {
    await this.frame.getByText('Online data only').click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/online-data-selected.png` });
  }

  async executeReport() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(5000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/report-executed.png` });
  }
}

module.exports = TransactionListPage;
