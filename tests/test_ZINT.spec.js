import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const InterfaceControlPage = require('../page_objects/ZINT');
const userData = require('../test_data/test_ZINT_user.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZINT', async ({ page }) => {
    const testName = 'test_ZINT';
    const loginPage = new LoginPage(page);
    const interfaceControlPage = new InterfaceControlPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await interfaceControlPage.navigateToTransaction();

    // Open Interface Control Transaction
    await interfaceControlPage.openInterfaceControlTransaction();

    // Click Input Field Help
    await interfaceControlPage.clickInputFieldHelp();

    // Execute Go
    await interfaceControlPage.executeGo();

    // Click OK
    await interfaceControlPage.clickOk();

    // Schedule Interface
    await interfaceControlPage.scheduleInterface();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZINT');
});
