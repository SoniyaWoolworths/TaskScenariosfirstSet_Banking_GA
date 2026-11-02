import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const WPayFeesPostingPage = require('../page_objects/ZFIN234');
const userData = require('../test_data/test_ZFIN234_user.json');
const inputData = require('../inputs/test_ZFIN234_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFIN234', async ({ page }) => {
    const testName = 'test_ZFIN234';
    const loginPage = new LoginPage(page);
    const wPayFeesPostingPage = new WPayFeesPostingPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await wPayFeesPostingPage.navigateToTransaction();

    // Open WPAY Fees Posting Rules
    await wPayFeesPostingPage.openWPayFeesPostingRules();

    // Click New Entries
    await wPayFeesPostingPage.clickNewEntries();

    // Enter First Rule
    await wPayFeesPostingPage.enterFirstRule(
        inputData.firstRule.merchantOrgId,
        inputData.firstRule.feeCode,
        inputData.firstRule.ruleNumber,
        inputData.firstRule.creditDebit,
        inputData.firstRule.bankId,
        inputData.firstRule.glAccount,
        inputData.firstRule.divisionNumber,
        inputData.firstRule.costCenter,
        inputData.firstRule.assignmentField,
        inputData.firstRule.fieldSource,
        inputData.firstRule.text,
        inputData.firstRule.assignmentType
    );

    // Enter Second Rule
    await wPayFeesPostingPage.enterSecondRule(
        inputData.secondRule.merchantOrgId,
        inputData.secondRule.feeCode,
        inputData.secondRule.ruleNumber,
        inputData.secondRule.creditDebit,
        inputData.secondRule.bankId,
        inputData.secondRule.glAccount,
        inputData.secondRule.divisionNumber,
        inputData.secondRule.costCenter,
        inputData.secondRule.assignmentField,
        inputData.secondRule.fieldSource,
        inputData.secondRule.text,
        inputData.secondRule.assignmentType,
        inputData.secondRule.companyCode,
        inputData.secondRule.profitCenter
    );

    // Save Rules
    await wPayFeesPostingPage.saveRules();

    // Position to Rule
    await wPayFeesPostingPage.positionToRule(
        inputData.position.processingType,
        inputData.position.merchantOrgId,
        inputData.position.ruleNumber
    );

    // Delete Rules
    await wPayFeesPostingPage.deleteRules();

    // Save Final
    await wPayFeesPostingPage.saveFinal();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFIN234');
});
