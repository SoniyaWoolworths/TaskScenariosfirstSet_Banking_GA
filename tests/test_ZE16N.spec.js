import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const TransactionPage = require('../page_objects/ZE16N');
const userData = require('../test_data/test_ZE16N_user.json');
const inputData = require('../inputs/test_ZE16N_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZE16N', async ({ page }) => {
    const testName = 'test_ZE16N';
    const loginPage = new LoginPage(page);
    const transactionPage = new TransactionPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await transactionPage.navigateToTransaction();

    // Open Transaction with
    await transactionPage.openTransactionWith();

    // Enter Table Name
    await transactionPage.enterTableName(inputData.tableName);

    // Execute Transaction
    await transactionPage.executeTransaction();

    // Click Online
    await transactionPage.clickOnline();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZE16N');
});
