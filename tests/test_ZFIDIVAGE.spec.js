import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const DivisionalAgeingPage = require('../page_objects/ZFIDIVAGE');
const userData = require('../test_data/test_ZFIDIVAGE_user.json');
const inputData = require('../inputs/test_ZFIDIVAGE_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFIDIVAGE', async ({ page }) => {
    const testName = 'test_ZFIDIVAGE';
    const loginPage = new LoginPage(page);
    const divisionalAgeingPage = new DivisionalAgeingPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Review and
    await divisionalAgeingPage.navigateToReportingReview();

    // Open Divisional AR / AP Ageing
    await divisionalAgeingPage.openDivisionalAgeing();

    // Select AR Ageing Type
    await divisionalAgeingPage.selectARAgeingType();

    // Enter Company Code
    await divisionalAgeingPage.enterCompanyCode(inputData.companyCode);

    // Enter Fiscal Year
    await divisionalAgeingPage.enterFiscalYear(inputData.fiscalYear);

    // Enter Open Item Date
    await divisionalAgeingPage.enterOpenItemDate(inputData.openItemDate);

    // Execute Report
    await divisionalAgeingPage.executeReport();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFIDIVAGE');
});
