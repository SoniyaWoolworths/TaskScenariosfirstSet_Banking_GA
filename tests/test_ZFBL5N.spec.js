import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const CustomerLineItemPage = require('../page_objects/ZFBL5N');
const userData = require('../test_data/test_ZFBL5N_user.json');
const inputData = require('../inputs/test_ZFBL5N_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFBL5N', async ({ page }) => {
    const testName = 'test_ZFBL5N';
    const loginPage = new LoginPage(page);
    const customerLineItemPage = new CustomerLineItemPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Review and
    await customerLineItemPage.navigateToReportingReview();

    // Open Customer Line Items
    await customerLineItemPage.openCustomerLineItems();

    // Enter Customer Account
    await customerLineItemPage.enterCustomerAccount(inputData.customerAccount);

    // Enter Company Code
    await customerLineItemPage.enterCompanyCode(inputData.companyCode);

    // Execute Search
    await customerLineItemPage.executeSearch();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFBL5N');
});
