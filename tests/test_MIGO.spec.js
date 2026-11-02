import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const GoodsMovementPage = require('../page_objects/MIGO');
const userData = require('../test_data/test_MIGO_user.json');
const inputData = require('../inputs/test_MIGO_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

test('testcase - MIGO', async ({ page }) => {
  const testName = 'test_MIGO';
  const loginPage = new LoginPage(page);
  const goodsMovementPage = new GoodsMovementPage(page, testName);

  // Login
  await loginPage.navigateToLogin(testName);
  await loginPage.login(userData.username, userData.password, testName);

  // Navigate to Transactions
  await goodsMovementPage.navigateToTransactions();

  // Open Goods Movement Tile
  await goodsMovementPage.openGoodsMovementTile();

  // Enter Purchase Order
  await goodsMovementPage.enterPurchaseOrder(inputData.purchaseOrder);

  // Enter Item Number
  await goodsMovementPage.enterItemNumber(inputData.itemNumber);
});

test.afterAll(async () => {
    await generatePDFReport('test_MIGO');
});