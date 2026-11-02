import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const VendorLineItemPage = require('../page_objects/ZFBL1N');
const userData = require('../test_data/test_ZFBL1N_user.json');
const inputData = require('../inputs/test_ZFBL1N_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFBL1N', async ({ page }) => {
    const testName = 'test_ZFBL1N';
    const loginPage = new LoginPage(page);
    const vendorLineItemPage = new VendorLineItemPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting
    await vendorLineItemPage.navigateToReporting();

    // Open Vendor Line Item Display
    await vendorLineItemPage.openVendorLineItemDisplay();

    // Enter Vendor Account
    await vendorLineItemPage.enterVendorAccount(inputData.vendorAccount);

    // Enter Company Code
    await vendorLineItemPage.enterCompanyCode(inputData.companyCode);

    // Execute Search
    await vendorLineItemPage.executeSearch();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFBL1N');
});
