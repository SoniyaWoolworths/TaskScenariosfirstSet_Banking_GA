import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const ItemInventoryStatusPage = require('../page_objects/ZPUR0351');
const userData = require('../test_data/test_ZPUR0351_user.json');
const inputData = require('../inputs/test_ZPUR0351_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZPUR0351', async ({ page }) => {
    const testName = 'test_ZPUR0351';
    const loginPage = new LoginPage(page);
    const itemInventoryStatusPage = new ItemInventoryStatusPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Review and
    await itemInventoryStatusPage.navigateToReportingReview();

    // Open Item Inventory Status Report
    await itemInventoryStatusPage.openItemInventoryStatusReport();

    // Enter Article
    await itemInventoryStatusPage.enterArticle(inputData.article);

    // Enter Site
    await itemInventoryStatusPage.enterSite(inputData.site);

    // Enter Purchase Organization
    await itemInventoryStatusPage.enterPurchaseOrganization(inputData.purchaseOrganization);

    // Enter Server Group
    await itemInventoryStatusPage.enterServerGroup(inputData.serverGroup);

    // Execute Report
    await itemInventoryStatusPage.executeReport();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZPUR0351');
});
