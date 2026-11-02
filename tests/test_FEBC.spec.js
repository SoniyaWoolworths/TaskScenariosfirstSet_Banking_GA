import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const BankStatementConversionPage = require('../page_objects/FEBC');
const FileUtility = require('../utility/FileUtility');
const userData = require('../test_data/test_FEBC_user.json');
const inputData = require('../inputs/test_FEBC_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - FEBC', async ({ page }) => {
    const testName = 'test_FEBC';
    const loginPage = new LoginPage(page);
    const bankStatementPage = new BankStatementConversionPage(page, testName);

    // Update bank statement files with random reference and current date
    const headerUpdate = FileUtility.updateBankStatementHeader(inputData.multicashHeaderFile);
    const itemUpdate = FileUtility.updateBankStatementItem(inputData.statementFile);
    
    console.log('Header file updated:', headerUpdate);
    console.log('Item file updated:', itemUpdate);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await bankStatementPage.navigateToTransaction();

    // Open Convert Bank Statements
    await bankStatementPage.openConvertBankStatements();

    // Get Variant
    await bankStatementPage.getVariant();

    // Clear Created By
    await bankStatementPage.clearCreatedBy();

    // Execute Variant Search
    await bankStatementPage.executeVariantSearch();

    // Select Variant
    await bankStatementPage.selectVariant(inputData.initialVariant);

    // Upload Statement File
    await bankStatementPage.uploadStatementFile(inputData.statementFile);

    // Upload Multicash Header File
    await bankStatementPage.uploadMulticashHeaderFile(inputData.multicashHeaderFile);

    // Execute Conversion
    await bankStatementPage.executeConversion();

    // Get Variant Again
    await bankStatementPage.getVariantAgain();

    // Find Variant
    await bankStatementPage.findVariant(inputData.searchVariant);

    // Select Found Variant
    await bankStatementPage.selectFoundVariant(inputData.finalVariant);

    // Execute Final
    await bankStatementPage.executeFinal();

    // Continue Process
    await bankStatementPage.continueProcess();

    // Go Back Twice
    // await bankStatementPage.goBackTwice();
});

test.afterAll(async () => {
    await generatePDFReport('test_FEBC');
});
