import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const HedgeRatePage = require('../page_objects/ZPUR0230');
const userData = require('../test_data/test_ZPUR0230_user.json');
const inputData = require('../inputs/test_ZPUR0230_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - ZPUR0230', async ({ page }) => {
    const testName = 'test_ZPUR0230';
    const loginPage = new LoginPage(page);
    const hedgeRatePage = new HedgeRatePage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Master Data
    await hedgeRatePage.navigateToMasterData();

    // Open Updating Hedge Rate
    await hedgeRatePage.openUpdatingHedgeRate();

    // Click New Entries
    await hedgeRatePage.clickNewEntries();

    // Enter Hedge Rate Details
    await hedgeRatePage.enterHedgeRateDetails(
        inputData.hedgeRate.merchandiseCategory,
        inputData.hedgeRate.fromCurrency,
        inputData.hedgeRate.toCurrency,
        null,
        inputData.hedgeRate.source,
        inputData.hedgeRate.rate
    );

    // Save Hedge Rate
    await hedgeRatePage.saveHedgeRate();

    // Update Hedge Rate
    await hedgeRatePage.updateHedgeRate(
        inputData.updateRate.oldRate,
        inputData.updateRate.newRate
    );

    // Save Updated Rate
    await hedgeRatePage.saveUpdatedRate();

    // Click Display
    await hedgeRatePage.clickDisplay();

    // Position to Record
    await hedgeRatePage.positionToRecord(
        inputData.position.merchandiseCategory,
        inputData.position.fromCurrency,
        inputData.position.toCurrency,
        null
    );
});

test.afterAll(async () => {
    await generatePDFReport('test_ZPUR0230');
});
