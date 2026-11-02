class SupplierInvoicePage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToTransactions() {
    await this.page.locator('div').filter({ hasText: /^Group Accounting$/ }).first().click();
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Transactions' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transactions-menu.png` });
  }

  async openDisplaySupplierInvoice() {
    await this.page.getByRole('link', { name: 'Display Supplier Invoice' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-SupplierInvoice-displayAdvanced-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/supplier-invoice-opened.png` });
  }

  async enterInvoiceDocument(invoiceDocumentNo) {
    await this.frame.getByRole('textbox', { name: 'Invoice Document No.' }).click();
    await this.frame.getByRole('textbox', { name: 'Invoice Document No.' }).fill(invoiceDocumentNo);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/invoice-document-entered.png` });
  }

  async enterFiscalYear(fiscalYear) {
    await this.frame.getByRole('textbox', { name: 'Fiscal Year' }).click();
    await this.frame.getByRole('textbox', { name: 'Fiscal Year' }).fill(fiscalYear);
    await this.frame.getByRole('textbox', { name: 'Fiscal Year' }).press('Enter');
    await this.page.screenshot({ path: `screenshots/${this.testName}/fiscal-year-entered.png` });
  }
}

module.exports = SupplierInvoicePage;
