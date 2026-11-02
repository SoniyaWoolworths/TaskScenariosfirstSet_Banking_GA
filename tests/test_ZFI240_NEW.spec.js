import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const TransactionListPage = require('../page_objects/ZFI240_NEW');
const userData = require('../test_data/test_ZFI240_NEW_user.json');
const inputData = require('../inputs/test_ZFI240_NEW_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFI240_NEW', async ({ page }) => {
    const testName = 'test_ZFI240_NEW';
    const loginPage = new LoginPage(page);
    const transactionListPage = new TransactionListPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Financial
    await transactionListPage.navigateToReportingFinancial();

    // Open Transaction List - Cost/Sell - New
    await transactionListPage.openTransactionListCostSell();

    // Enter Profit Centre
    await transactionListPage.enterProfitCentre(inputData.profitCentre);

    // Enter Company Code
    await transactionListPage.enterCompanyCode(inputData.companyCode);

    // Enter Account Group
    await transactionListPage.enterAccountGroup(inputData.accountGroup);

    // Enter Posting Date
    await transactionListPage.enterPostingDate(inputData.postingDate);

    // Enter Display Layout Variant
    await transactionListPage.enterDisplayLayoutVariant(inputData.displayLayoutVariant);

    // Select Online Data Only
    await transactionListPage.selectOnlineDataOnly();

    // Execute Report
    await transactionListPage.executeReport();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFI240_NEW');
});
