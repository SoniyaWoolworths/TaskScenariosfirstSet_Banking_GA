class GoodsMovementPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToTransactions() {
    await this.page.locator('div').filter({ hasText: /^Group Accounting$/ }).first().click();
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Transactions' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transactions-menu.png` });
  }

  async openGoodsMovementTile() {
    await this.page.getByRole('link', { name: 'Goods Movement Tile' }).click();
    await this.page.waitForTimeout(500);
    this.frame = this.page.locator('iframe[name="application-Material-goodsReceipt-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/goods-movement-opened.png` });
  }

  async enterPurchaseOrder(purchaseOrder) {
    await this.frame.getByRole('textbox', { name: 'Purchase Order', exact: true }).click();
    await this.frame.getByRole('textbox', { name: 'Purchase Order', exact: true }).fill(purchaseOrder);
    await this.frame.getByRole('textbox', { name: 'Purchase Order', exact: true }).press('Enter');
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/purchase-order-entered.png` });
  }

  async enterItemNumber(itemNumber) {
    await this.frame.getByRole('textbox', { name: 'Item Number of Purchase Order' }).click();
    await this.frame.getByRole('textbox', { name: 'Item Number of Purchase Order' }).fill(itemNumber);
    await this.frame.getByRole('textbox', { name: 'Item Number of Purchase Order' }).press('Enter');
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/item-number-entered.png` });
  }
}

module.exports = GoodsMovementPage;
