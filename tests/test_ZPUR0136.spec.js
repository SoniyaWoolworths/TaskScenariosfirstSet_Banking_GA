import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const StockCardInventoryPage = require('../page_objects/ZPUR0136');
const userData = require('../test_data/test_ZPUR0136_user.json');
const inputData = require('../inputs/test_ZPUR0136_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZPUR0136', async ({ page }) => {
    const testName = 'test_ZPUR0136';
    const loginPage = new LoginPage(page);
    const stockCardInventoryPage = new StockCardInventoryPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Reporting - Review and
    await stockCardInventoryPage.navigateToReportingReview();

    // Open Stock card and inventory
    await stockCardInventoryPage.openStockCardInventory();

    // Enter Article
    await stockCardInventoryPage.enterArticle(inputData.article);

    // Enter Site
    await stockCardInventoryPage.enterSite(inputData.site);

    // Enter Company Code
    await stockCardInventoryPage.enterCompanyCode(inputData.companyCode);

    // Enter Selection Date From
    await stockCardInventoryPage.enterSelectionDateFrom(inputData.selectionDateFrom);

    // Enter Selection Date To
    await stockCardInventoryPage.enterSelectionDateTo(inputData.selectionDateTo);

    // Execute Report
    await stockCardInventoryPage.executeReport();
});

test.afterAll(async () => {
    await generatePDFReport('test_ZPUR0136');
});
