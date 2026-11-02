import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const SupplierInvoicePage = require('../page_objects/MIR4');
const userData = require('../test_data/test_MIR4_user.json');
const inputData = require('../inputs/test_MIR4_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - MIR4', async ({ page }) => {
  const testName = 'test_MIR4';
  const loginPage = new LoginPage(page);
  const supplierInvoicePage = new SupplierInvoicePage(page, testName);

  // Login
  await loginPage.navigateToLogin(testName);
  await loginPage.login(userData.username, userData.password, testName);

  // Navigate to Transactions
  await supplierInvoicePage.navigateToTransactions();

  // Open Display Supplier Invoice
  await supplierInvoicePage.openDisplaySupplierInvoice();

  // Enter Invoice Document Number
  await supplierInvoicePage.enterInvoiceDocument(inputData.invoiceDocumentNo);

  // Enter Fiscal Year
  await supplierInvoicePage.enterFiscalYear(inputData.fiscalYear);
});

test.afterAll(async () => {
    await generatePDFReport('test_MIR4');
});