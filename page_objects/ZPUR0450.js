class GRIRUnmatchedPage {
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

  async openGRIRUnmatchedReport() {
    await this.page.getByRole('link', { name: 'GR IR Unmatched TD wise' }).click();
    await this.page.waitForTimeout(2000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/grir-unmatched-opened.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).fill(companyCode);
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async enterLastGRMovementDate(lastGRDate) {
    await this.frame.getByRole('textbox', { name: 'Last GR mvmt. date' }).click();
    await this.frame.getByRole('textbox', { name: 'Last GR mvmt. date' }).fill(lastGRDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/last-gr-date-entered.png` });
  }

  async enterPostingDate(postingDate) {
    await this.frame.getByTitle('Posting Date in the Document').nth(1).fill(postingDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/posting-date-entered.png` });
  }

  async selectLayout(layoutName) {
    await this.frame.getByRole('textbox', { name: 'Layout Required' }).click();
    await this.frame.locator('#ls-inputfieldhelpbutton').click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: layoutName }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/layout-selected.png` });
  }

  async executeReport() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(4000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/report-executed.png` });
  }

  async selectFirstRow() {
    await this.frame.locator('#C105-mrss-cont-none-Row-0').getByText('1000').click();
    await this.frame.locator('#C105-mrss-cont-none-Row-0').click();
    await this.page.waitForTimeout(500);
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/first-row-selected.png` });
  }
}

module.exports = GRIRUnmatchedPage;
