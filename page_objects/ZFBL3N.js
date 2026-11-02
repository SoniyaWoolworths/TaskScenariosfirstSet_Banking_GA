class GLReportPage {
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

  async openGLReportWithVendorItem() {
    await this.page.getByRole('link', { name: 'GL report with vendor item' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfbl3n-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/gl-report-opened.png` });
  }

  async enterGLAccount(glAccount) {
    await this.frame.getByRole('textbox', { name: 'G/L account' }).fill(glAccount);
    await this.frame.getByRole('textbox', { name: 'G/L account' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/gl-account-entered.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code' }).fill(companyCode);
    await this.frame.getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async selectAllItems() {
    await this.frame.getByRole('radio', { name: 'All items' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/all-items-selected.png` });
  }

  async enterPostingDateRange(fromDate, toDate) {
    await this.frame.getByRole('textbox', { name: 'Posting date' }).click();
    await this.frame.getByRole('textbox', { name: 'Posting date' }).fill(fromDate);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'to', exact: true }).nth(5).click();
    await this.frame.getByRole('textbox', { name: 'to', exact: true }).nth(5).fill(toDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/posting-date-range-entered.png` });
  }

  async executeSearch() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/search-executed.png` });
  }
}

module.exports = GLReportPage;
