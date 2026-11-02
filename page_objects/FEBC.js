class BankStatementConversionPage {
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

  async openConvertBankStatements() {
    await this.page.getByRole('link', { name: 'Convert Bank Statements to' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-BankStatement-convertFormatToMulticash-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/convert-bank-statements-opened.png` });
  }

  async getVariant() {
    await this.frame.getByRole('button', { name: 'Get Variant...' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/get-variant-clicked.png` });
  }

  async clearCreatedBy() {
    await this.frame.getByRole('textbox', { name: 'Created By' }).click();
    await this.frame.getByRole('textbox', { name: 'Created By' }).fill('');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/created-by-cleared.png` });
  }

  async executeVariantSearch() {
    await this.frame.getByRole('button', { name: 'Execute (F8)' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/variant-search-executed.png` });
  }

  async selectVariant(variantName) {
    await this.frame.getByText(variantName).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Choose' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/variant-selected.png` });
  }

  async uploadStatementFile(filePath) {
    await this.frame.getByRole('textbox', { name: 'Statement File', exact: true }).click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('#ls-inputfieldhelpbutton').click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('input[type="file"]').setInputFiles(filePath);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/statement-file-uploaded.png` });
  }

  async uploadMulticashHeaderFile(filePath) {
    await this.frame.getByRole('textbox', { name: 'Multicash Header File', exact: true }).click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('#ls-inputfieldhelpbutton').click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('input[type="file"]').setInputFiles(filePath);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/multicash-header-uploaded.png` });
  }

  async executeConversion() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/conversion-executed.png` });
  }

  async getVariantAgain() {
    await this.frame.getByRole('button', { name: 'Get Variant...' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/get-variant-again.png` });
  }

  async findVariant(searchTerm) {
    await this.frame.getByText('Variant name').click({ button: 'right' });
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('cell', { name: 'Find', exact: true }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Find Required' }).fill(searchTerm);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Find' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/variant-found.png` });
  }

  async selectFoundVariant(variantName) {
    await this.frame.getByRole('button', { name: variantName }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Choose' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/found-variant-selected.png` });
  }

  async executeFinal() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/final-execution.png` });
  }

  async continueProcess() {
    await this.frame.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/process-continued.png` });
  }

  async goBackTwice() {
    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/navigated-back.png` });
  }
}

module.exports = BankStatementConversionPage;
