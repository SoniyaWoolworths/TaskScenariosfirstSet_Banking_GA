import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const PostWithClearingPage = require('../page_objects/FB05L');
const userData = require('../test_data/test_FB05L_user.json');
const inputData = require('../inputs/test_FB05L_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - FB05L', async ({ page }) => {
    const testName = 'test_FB05L';
    const loginPage = new LoginPage(page);
    const postWithClearingPage = new PostWithClearingPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await postWithClearingPage.navigateToTransaction();

    // Open Post with Clearing For Ledger
    await postWithClearingPage.openPostWithClearingForLedger();

    // Enter Document Date (uses current date)
    await postWithClearingPage.enterDocumentDate();

    // Enter Document Type
    await postWithClearingPage.enterDocumentType(inputData.documentType);

    // Enter Company Code
    await postWithClearingPage.enterCompanyCode(inputData.companyCode);

    // Enter Period
    await postWithClearingPage.enterPeriod(inputData.period);

    // Enter Currency
    await postWithClearingPage.enterCurrency(inputData.currency);

    // Enter Reference
    await postWithClearingPage.enterReference(inputData.reference);

    // Enter Header Text
    await postWithClearingPage.enterHeaderText(inputData.headerText);

    // Enter First Line Item
    await postWithClearingPage.enterFirstLineItem(
        inputData.firstLineItem.postingKey,
        inputData.firstLineItem.account,
        inputData.firstLineItem.amount,
        inputData.firstLineItem.costCenter
    );

    // Enter Second Line Item
    await postWithClearingPage.enterSecondLineItem(
        inputData.secondLineItem.postingKey,
        inputData.secondLineItem.account,
        inputData.secondLineItem.amount,
        inputData.secondLineItem.costCenter
    );

    // Post Document
    await postWithClearingPage.postDocument();
});

test.afterAll(async () => {
    await generatePDFReport('test_FB05L');
});
