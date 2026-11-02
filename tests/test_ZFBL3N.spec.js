import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const GLReportPage = require('../page_objects/ZFBL3N');
const userData = require('../test_data/test_ZFBL3N_user.json');
const inputData = require('../inputs/test_ZFBL3N_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFBL3N', async ({ page }) => {
    const testName = 'test_ZFBL3N';
    const loginPage = new LoginPage(page);
    const glReportPage = new GLReportPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Financial
    await glReportPage.navigateToReportingFinancial();

    // Open GL Report with Vendor Item
    await glReportPage.openGLReportWithVendorItem();

    // Enter G/L Account
    await glReportPage.enterGLAccount(inputData.glAccount);

    // Enter Company Code
    await glReportPage.enterCompanyCode(inputData.companyCode);

    // Select All Items
    await glReportPage.selectAllItems();

    // Enter Posting Date Range
    await glReportPage.enterPostingDateRange(inputData.postingDateFrom, inputData.postingDateTo);

    // Execute Search
    await glReportPage.executeSearch();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFBL3N');
});
