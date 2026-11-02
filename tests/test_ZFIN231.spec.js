import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const WPayPostingRulePage = require('../page_objects/ZFIN231');
const userData = require('../test_data/test_ZFIN231_user.json');
const inputData = require('../inputs/test_ZFIN231_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZFIN231', async ({ page }) => {
    const testName = 'test_ZFIN231';
    const loginPage = new LoginPage(page);
    const wPayPostingRulePage = new WPayPostingRulePage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await wPayPostingRulePage.navigateToTransaction();

    // Open WPAY Posting Rule
    await wPayPostingRulePage.openWPayPostingRule();

    // Click New Entries
    await wPayPostingRulePage.clickNewEntries();

    // Enter First Rule Details
    await wPayPostingRulePage.enterFirstRuleDetails(
        inputData.firstRule.recordType,
        inputData.firstRule.merchantOrgId,
        inputData.firstRule.ruleNumber,
        inputData.firstRule.creditDebit,
        inputData.firstRule.value,
        inputData.firstRule.assignmentField,
        inputData.firstRule.fieldSource,
        inputData.firstRule.text,
        inputData.firstRule.assignmentType
    );

    // Enter Second Rule Details
    await wPayPostingRulePage.enterSecondRuleDetails(
        inputData.secondRule.recordType,
        inputData.secondRule.merchantOrgId,
        inputData.secondRule.ruleNumber,
        inputData.secondRule.creditDebit,
        inputData.secondRule.companyCode,
        inputData.secondRule.glAccount,
        inputData.secondRule.costCenter,
        inputData.secondRule.assignmentField,
        inputData.secondRule.fieldSource,
        inputData.secondRule.text,
        inputData.secondRule.assignmentType
    );

    // Save Rules
    await wPayPostingRulePage.saveRules();

    // Position to Rule
    await wPayPostingRulePage.positionToRule(
        inputData.position.recordType,
        inputData.position.merchantOrgId,
        inputData.position.ruleNumber
    );

    // Delete Rules
    await wPayPostingRulePage.deleteRules();

    // Save Final
    await wPayPostingRulePage.saveFinal();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFIN231');
});
