class DivisionalAgeingPage {
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

  async openDivisionalAgeing() {
    await this.page.getByRole('link', { name: 'Divisional AR / AP Ageing' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfidivage-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/divisional-ageing-opened.png` });
  }

  async selectARAgeingType() {
    await this.frame.getByRole('radio', { name: 'AR Ageing' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/ar-ageing-selected.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).fill(companyCode);
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async enterFiscalYear(fiscalYear) {
    await this.frame.getByRole('textbox', { name: 'Fiscal Year Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Fiscal Year Required' }).fill(fiscalYear);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/fiscal-year-entered.png` });
  }

  async enterOpenItemDate(openItemDate) {
    await this.frame.getByRole('textbox', { name: 'Open Item Date Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Open Item Date Required' }).fill(openItemDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/open-item-date-entered.png` });
  }

  async executeReport() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(5000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/report-executed.png` });
  }
}

module.exports = DivisionalAgeingPage;
