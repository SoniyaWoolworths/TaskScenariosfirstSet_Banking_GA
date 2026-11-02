import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const ZFI240Page = require('../page_objects/ZFI240');
const userData = require('../test_data/test_ZFI240_user.json');
const inputData = require('../inputs/test_ZFI240_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase  - ZFI240', async ({ page }) => {
    const testName = 'test_ZFI240';
    const loginPage = new LoginPage(page);
    const zfi240Page = new ZFI240Page(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Financial
    await zfi240Page.navigateToReportingFinancial();

    // Open Transaction List - Cost/Sell
    await zfi240Page.openTransactionListCostSell();

    // Enter Profit Centre
    await zfi240Page.enterProfitCentre(inputData.profitCentre);

    // Enter Company Code
    await zfi240Page.enterCompanyCode(inputData.companyCode);

    // Enter Account Group
    await zfi240Page.enterAccountGroup(inputData.accountGroup);

    // Enter Posting Date
    await zfi240Page.enterPostingDate(inputData.postingDate);

    // Enter Display Layout Variant
    await zfi240Page.enterDisplayLayoutVariant(inputData.displayLayoutVariant);

    // Select Online Data Only
    await zfi240Page.selectOnlineDataOnly();

    // Execute Report
    await zfi240Page.executeReport();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFI240');
});
