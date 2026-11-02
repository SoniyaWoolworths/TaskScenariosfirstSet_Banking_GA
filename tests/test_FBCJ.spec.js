import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const CashJournalPage = require('../page_objects/FBCJ');
const userData = require('../test_data/test_FBCJ_user.json');
const inputData = require('../inputs/test_FBCJ_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - FBCJ', async ({ page }) => {
    const testName = 'test_FBCJ';
    const loginPage = new LoginPage(page);
    const cashJournalPage = new CashJournalPage(page, testName);

    // Login
    await loginPage.navigateToLogin(testName);
    await loginPage.login(userData.username, userData.password, testName);

    // Navigate to Transaction
    await cashJournalPage.navigateToTransaction();

    // Open Post Cash Journal Entries
    await cashJournalPage.openPostCashJournalEntries();

    // Change Cash Journal
    await cashJournalPage.changeCashJournal();

    // Enter Journal Entry
    await cashJournalPage.enterJournalEntry(
        inputData.description,
        inputData.postingKey,
        inputData.text,
        inputData.account,
        inputData.businessArea,
        inputData.costCenter1,
        inputData.costCenter2
    );

    // Select Entry
    await cashJournalPage.selectEntry();

    // Post Selected Entry
    await cashJournalPage.postSelectedEntry();
});

test.afterAll(async () => {
    await generatePDFReport('test_FBCJ');
});
