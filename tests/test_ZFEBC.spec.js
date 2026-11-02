import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const ZFEBCPage = require('../page_objects/ZFEBCPage');
const FileUtility = require('../utility/FileUtility');
const userData = require('../test_data/test_ZFEBC_user.json');
const inputData = require('../inputs/test_ZFEBC_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase -  ZFEBC', async ({ page }) => {
    const testName = 'test_ZFEBC';
    const loginPage = new LoginPage(page);
    const zfebcPage = new ZFEBCPage(page, testName);

    // Update bank statement files with random reference and current date
    const headerUpdate = FileUtility.updateBankStatementHeader(inputData.multicashHeaderFile);
    const itemUpdate = FileUtility.updateBankStatementItem(inputData.statementFile);
    
    console.log('Header file updated:', headerUpdate);
    console.log('Item file updated:', itemUpdate);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await zfebcPage.navigateToTransaction();

    // Open ZFEBC Program
    await zfebcPage.openZFEBCProgram();

    // Get Variant
    await zfebcPage.getVariant();

    // Clear Created By
    await zfebcPage.clearCreatedBy();

    // Execute Variant Search
    await zfebcPage.executeVariantSearch();

    // Select Variant
    await zfebcPage.selectVariant(inputData.initialVariant);

    // Upload Statement File
    await zfebcPage.uploadStatementFile(inputData.statementFile);

    // Upload Multicash Header File
    await zfebcPage.uploadMulticashHeaderFile(inputData.multicashHeaderFile);

    // Execute Conversion
    await zfebcPage.executeConversion();

    // Get Variant Again
    await zfebcPage.getVariantAgain();

    // Find Variant
    await zfebcPage.findVariant(inputData.searchVariant);

    // Select Found Variant
    await zfebcPage.selectFoundVariant(inputData.finalVariant);

    // Execute Final
    await zfebcPage.executeFinal();

    // Continue Process
    await zfebcPage.continueProcess();

    // Go Back Twice
    // await zfebcPage.goBackTwice();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZFEBC');
});
