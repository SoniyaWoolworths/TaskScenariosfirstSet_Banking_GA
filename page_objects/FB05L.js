class PostWithClearingPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  }

  async navigateToTransaction() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Transaction' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-menu.png` });
  }

  async openPostWithClearingForLedger() {
    await this.page.getByRole('link', { name: 'Post with Clearing For Ledger' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-AccountingDocument-postWithClearingforLedgerGroup-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/post-with-clearing-opened.png` });
  }

  async enterDocumentDate(documentDate = null) {
    const dateToEnter = documentDate || this.getCurrentDate();
    await this.frame.getByRole('textbox', { name: 'Document Date Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Document Date Required' }).fill(dateToEnter);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/document-date-entered.png` });
  }

  async enterDocumentType(documentType) {
    await this.frame.getByRole('textbox', { name: 'Type Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Type Required' }).fill(documentType);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/document-type-entered.png` });
  }

  async enterCompanyCode(companyCode) {
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Company Code Required' }).fill(companyCode);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/company-code-entered.png` });
  }

  async enterPeriod(period) {
    await this.frame.getByRole('textbox', { name: 'Period' }).click();
    await this.frame.getByRole('textbox', { name: 'Period' }).fill(period);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/period-entered.png` });
  }

  async enterCurrency(currency) {
    await this.frame.getByRole('textbox', { name: 'Currency/Rate Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Currency/Rate Required' }).fill(currency);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/currency-entered.png` });
  }

  async enterReference(reference) {
    await this.frame.getByRole('textbox', { name: 'Reference' }).click();
    await this.frame.getByRole('textbox', { name: 'Reference' }).fill(reference);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/reference-entered.png` });
  }

  async enterHeaderText(headerText) {
    await this.frame.getByRole('textbox', { name: 'Doc.Header Text' }).click();
    await this.frame.getByRole('textbox', { name: 'Doc.Header Text' }).fill(headerText);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/header-text-entered.png` });
  }

  async enterFirstLineItem(postingKey, account, amount, costCenter) {
    await this.frame.getByRole('textbox', { name: 'PstKy' }).click();
    await this.frame.getByRole('textbox', { name: 'PstKy' }).fill(postingKey);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Account' }).click();
    await this.frame.getByRole('textbox', { name: 'Account' }).fill(account);
    await this.frame.getByRole('textbox', { name: 'Account' }).press('Enter');
    await this.page.waitForTimeout(2000);
    await this.frame.getByRole('textbox', { name: 'Amount' }).fill(amount);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Cost Center' }).click();
    await this.frame.getByRole('textbox', { name: 'Cost Center' }).fill(costCenter);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/first-line-item-entered.png` });
  }

  async enterSecondLineItem(postingKey, account, amount, costCenter) {
    await this.frame.getByRole('textbox', { name: 'PstKy' }).click();
    await this.frame.getByRole('textbox', { name: 'PstKy' }).fill(postingKey);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Account', exact: true }).click();
    await this.frame.getByRole('textbox', { name: 'Account', exact: true }).fill(account);
    await this.frame.getByRole('textbox', { name: 'Account', exact: true }).press('Enter');
    await this.page.waitForTimeout(2000);
    await this.frame.getByRole('textbox', { name: 'Amount' }).fill(amount);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Cost Center' }).click();
    await this.frame.getByRole('textbox', { name: 'Cost Center' }).fill(costCenter);
    await this.frame.getByRole('textbox', { name: 'Cost Center' }).press('Enter');
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/second-line-item-entered.png` });
  }

  async postDocument() {
    await this.frame.getByRole('button', { name: 'Post  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/document-posted.png` });
  }
}

module.exports = PostWithClearingPage;
