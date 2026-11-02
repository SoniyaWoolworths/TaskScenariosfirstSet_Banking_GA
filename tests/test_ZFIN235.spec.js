import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const WPayFeeUploadPage = require('../page_objects/ZFIN235');
const userData = require('../test_data/test_ZFIN235_user.json');
const inputData = require('../inputs/test_ZFIN235_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFIN235', async ({ page }) => {
    const testName = 'test_ZFIN235';
    const loginPage = new LoginPage(page);
    const wPayFeeUploadPage = new WPayFeeUploadPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await wPayFeeUploadPage.navigateToTransaction();

    // Open Upload Program-WPAY Fee
    await wPayFeeUploadPage.openUploadProgramWPayFee();

    // Select Update Option
    await wPayFeeUploadPage.selectUpdateOption();

    // Select Upload Option
    await wPayFeeUploadPage.selectUploadOption();

    // Upload File
    await wPayFeeUploadPage.uploadFile(inputData.uploadFile);

    // Execute Upload
    await wPayFeeUploadPage.executeUpload();

    // Select Manual Option
    await wPayFeeUploadPage.selectManualOption();

    // Execute Manual
    await wPayFeeUploadPage.executeManual();

    // Position to Record
    await wPayFeeUploadPage.positionToRecord(
        inputData.position.processingType,
        inputData.position.merchantOrgId,
        inputData.position.ruleNumber
    );
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFIN235');
});
