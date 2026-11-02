import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const CrossBannerPaymentPage = require('../page_objects/ZFIN0226');
const userData = require('../test_data/test_ZFIN0226_user.json');
const inputData = require('../inputs/test_ZFIN0226_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFIN0226', async ({ page }) => {
    const testName = 'test_ZFIN0226';
    const loginPage = new LoginPage(page);
    const crossBannerPaymentPage = new CrossBannerPaymentPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await crossBannerPaymentPage.navigateToTransaction();

    // Open Cross Banner Payment
    await crossBannerPaymentPage.openCrossBannerPayment();

    // Enter Source Company Code
    await crossBannerPaymentPage.enterSourceCompanyCode(inputData.source.companyCode);

    // Enter Source Document Type
    await crossBannerPaymentPage.enterSourceDocumentType(inputData.source.documentType);

    // Enter Entry Date
    await crossBannerPaymentPage.enterEntryDate(inputData.entryDate);

    // Select Profit Center Checkbox
    await crossBannerPaymentPage.selectProfitCenterCheckbox();

    // Enter G/L Account
    await crossBannerPaymentPage.enterGLAccount(inputData.glAccount);

    // Enter Source Profit Center
    await crossBannerPaymentPage.enterSourceProfitCenter(inputData.source.profitCenter);

    // Enter Target Company Code
    await crossBannerPaymentPage.enterTargetCompanyCode(inputData.target.companyCode);

    // Enter Target Document Type
    await crossBannerPaymentPage.enterTargetDocumentType(inputData.target.documentType);

    // Enter Posting Date
    await crossBannerPaymentPage.enterPostingDate(inputData.postingDate);

    // Execute Payment
    await crossBannerPaymentPage.executePayment();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFIN0226');
});
