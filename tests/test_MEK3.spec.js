import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const PriceConditionPage = require('../page_objects/MEK3');
const userData = require('../test_data/test_MEK3_user.json');
const inputData = require('../inputs/test_MEK3_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - MEK3', async ({ page }) => {
  const testName = 'test_MEK3';
  const loginPage = new LoginPage(page);
  const priceConditionPage = new PriceConditionPage(page, testName);

  // Login
  await loginPage.navigateToLogin(testName);
  await loginPage.login(userData.username, userData.password, testName);

  // Navigate to Master Data
  await priceConditionPage.navigateToMasterData();

  // Open Display Price Conditions
  await priceConditionPage.openDisplayPriceConditions();

  // Enter Condition Type
  await priceConditionPage.selectConditionType(inputData.conditionType);

  // Select Key Combination
  await priceConditionPage.selectKeyCombination(inputData.keyCombination);

  // Enter Supplier
  await priceConditionPage.enterSupplier(inputData.supplier);

  // Enter Article
  await priceConditionPage.enterArticle(inputData.article);

  // Enter Purchase Organization
  await priceConditionPage.enterPurchaseOrganization(inputData.purchaseOrganization);

  // Enter Info Record Category
  await priceConditionPage.enterInfoRecordCategory(inputData.infoRecordCategory);

  // Execute Search
  await priceConditionPage.executeSearch();
  
});

test.afterAll(async () => {
    await generatePDFReport('test_MEK3');
});