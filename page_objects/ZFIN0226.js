class CrossBannerPaymentPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToTransaction() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Transaction' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-menu.png` });
  }

  async openCrossBannerPayment() {
    await this.page.getByRole('link', { name: 'Cross Banner Payment ZFIN0226' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfin0226-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/cross-banner-payment-opened.png` });
  }

  async enterSourceCompanyCode(companyCode) {
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Company Code', { exact: true }).click();
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Company Code', { exact: true }).fill(companyCode);
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Company Code', { exact: true }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/source-company-code-entered.png` });
  }

  async enterSourceDocumentType(documentType) {
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Document Type', { exact: true }).click();
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Document Type', { exact: true }).fill(documentType);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/source-document-type-entered.png` });
  }

  async enterEntryDate(entryDate) {
    await this.frame.getByRole('textbox', { name: 'Entry Date Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Entry Date Required' }).fill(entryDate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/entry-date-entered.png` });
  }

  async selectProfitCenterCheckbox() {
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel(':Profit Center').click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/profit-center-checkbox-selected.png` });
  }

  async enterGLAccount(glAccount) {
    await this.frame.getByRole('textbox', { name: 'G/L Account Required' }).fill(glAccount);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/gl-account-entered.png` });
  }

  async enterSourceProfitCenter(profitCenter) {
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Profit Center', { exact: true }).click();
    await this.frame.getByRole('group', { name: 'Source' }).getByLabel('Profit Center', { exact: true }).fill(profitCenter);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/source-profit-center-entered.png` });
  }

  async enterTargetCompanyCode(companyCode) {
    await this.frame.getByRole('group', { name: 'Target' }).getByLabel('Company Code', { exact: true }).click();
    await this.frame.getByRole('group', { name: 'Target' }).getByLabel('Company Code', { exact: true }).fill(companyCode);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/target-company-code-entered.png` });
  }

  async enterTargetDocumentType(documentType) {
    await this.frame.getByRole('group', { name: 'Target' }).getByLabel('Document Type', { exact: true }).click();
    await this.frame.getByRole('group', { name: 'Target' }).getByLabel('Document Type', { exact: true }).fill(documentType);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/target-document-type-entered.png` });
  }

  async enterPostingDate(postingDate) {
    await this.frame.getByRole('textbox', { name: 'Posting Date Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Posting Date Required' }).fill(postingDate);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/posting-date-entered.png` });
  }

  async executePayment() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/payment-executed.png` });
  }
}

module.exports = CrossBannerPaymentPage;
