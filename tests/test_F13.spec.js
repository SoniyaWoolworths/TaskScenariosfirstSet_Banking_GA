import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const ClearOpenItemsPage = require('../page_objects/F13');
const userData = require('../test_data/test_F13_user.json');
const inputData = require('../inputs/test_F13_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - F.13', async ({ page }) => {
    const testName = 'test_F13';
    const loginPage = new LoginPage(page);
    const clearOpenItemsPage = new ClearOpenItemsPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await clearOpenItemsPage.navigateToTransaction();

    // Open Clear Open Items
    await clearOpenItemsPage.openClearOpenItems();

    // Get Variant
    await clearOpenItemsPage.getVariant();

    // Clear Created By
    await clearOpenItemsPage.clearCreatedBy();

    // Execute Variant Search
    await clearOpenItemsPage.executeVariantSearch();

    // Find Variant
    await clearOpenItemsPage.findVariant(inputData.searchTerm);

    // Close Find Dialog
    await clearOpenItemsPage.closeFindDialog();

    // Select Variant
    await clearOpenItemsPage.selectVariant(inputData.variantName);

    // Execute with Variant
    await clearOpenItemsPage.executeWithVariant();

    // Go Back
    await clearOpenItemsPage.goBack();

    // Enter Document Range
    await clearOpenItemsPage.enterDocumentRange(inputData.documentFrom, inputData.documentTo);

    // Disable Test Run
    await clearOpenItemsPage.disableTestRun();

    // Execute Final Process
    await clearOpenItemsPage.executeFinalProcess();
});

test.afterAll(async () => {
    await generatePDFReport('test_F13');
});
