class ClearOpenItemsPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToTransaction() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.getByRole('menuitem', { name: 'Transaction' }).click();
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-menu.png` });
  }

  async openClearOpenItems() {
    await this.page.getByRole('link', { name: 'Clear Open Items' }).click();
    this.frame = this.page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/clear-open-items-opened.png` });
  }

  async getVariant() {
    await this.frame.getByRole('button', { name: 'Get Variant...' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/get-variant-clicked.png` });
  }

  async clearCreatedBy() {
    await this.frame.getByRole('textbox', { name: 'Created By' }).fill('');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/created-by-cleared.png` });
  }

  async executeVariantSearch() {
    await this.frame.getByRole('button', { name: 'Execute (F8)' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/variant-search-executed.png` });
  }

  async findVariant(searchTerm) {
    await this.frame.getByRole('button', { name: 'Find...' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Search Term' }).fill(searchTerm);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('checkbox', { name: 'Find only entire word or value' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'OK' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/variant-found.png` });
  }

  async closeFindDialog() {
    await this.frame.getByRole('dialog', { name: 'Find' }).getByLabel('Close').click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/find-dialog-closed.png` });
  }

  async selectVariant(variantName) {
    await this.frame.getByText(variantName).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Choose' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/variant-selected.png` });
  }

  async executeWithVariant() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(2000);
    await this.frame.getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/executed-with-variant.png` });
  }

  async goBack() {
    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/navigated-back.png` });
  }

  async enterDocumentRange(docFrom, docTo) {
    await this.frame.getByRole('textbox', { name: 'Document Number' }).click();
    await this.frame.getByRole('textbox', { name: 'Document Number' }).fill(docFrom);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'to' }).nth(3).click();
    await this.frame.getByRole('textbox', { name: 'to' }).nth(3).fill(docTo);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/document-range-entered.png` });
  }

  async disableTestRun() {
    await this.frame.getByRole('checkbox', { name: 'Test Run' }).click();
    await this.page.screenshot({ path: `screenshots/${this.testName}/test-run-disabled.png` });
  }

  async executeFinalProcess() {
    await this.frame.getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await this.frame.getByRole('textbox', { name: 'Company Code' }).press('Enter');
    await this.page.waitForTimeout(4000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/final-process-executed.png` });
  }
}

module.exports = ClearOpenItemsPage;
