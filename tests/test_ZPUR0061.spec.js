import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const PurchaseOrderPage = require('../page_objects/ZPUR0061');
const userData = require('../test_data/test_ZPUR0061_user.json');
const inputData = require('../inputs/test_ZPUR0061_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZPUR0061', async ({ page }) => {
    const testName = 'test_ZPUR0061';
    const loginPage = new LoginPage(page);
    const purchaseOrderPage = new PurchaseOrderPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Search for Transaction
    await purchaseOrderPage.searchForTransaction(inputData.searchTerm);

    // Open ZPUR0061
    await purchaseOrderPage.openZPUR0061();

    // Enter Source File Date
    await purchaseOrderPage.enterSourceFileDate(inputData.sourceFileDate);

    // Enter Sales Org
    await purchaseOrderPage.enterSalesOrg(inputData.salesOrg);

    // Enter Site
    await purchaseOrderPage.enterSite(inputData.site);

    // Enter Posting Date
    await purchaseOrderPage.enterPostingDate(inputData.postingDate);

    // Enter Storage Location
    await purchaseOrderPage.enterStorageLocation(inputData.storageLocation);

    // Execute Process
    await purchaseOrderPage.executeProcess();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZPUR0061');
});
