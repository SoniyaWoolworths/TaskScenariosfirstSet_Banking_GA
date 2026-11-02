class PriceConditionPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToMasterData() {
    await this.page.getByLabel('Space Page').getByText('Group Accounting').click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.getByRole('menuitem', { name: 'Master Data' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/master-data-menu.png` });
  }

  async openDisplayPriceConditions() {
    await this.page.getByRole('link', { name: 'Display Price Conditions Tile' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-PriceCondition-display-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/price-conditions-opened.png` });
  }

  async selectConditionType(conditionType) {
    await this.frame.getByRole('textbox', { name: 'Condition Type' }).click();
    await this.frame.getByRole('textbox', { name: 'Condition Type' }).fill(conditionType);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/condition-type-entered.png` });
  }

  async selectKeyCombination(combinationName) {
    await this.frame.getByRole('button', { name: 'Key Combination' }).click();
    await this.page.waitForTimeout(1000);
    await this.frame.getByRole('radio', { name: combinationName, exact: true }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Choose' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/key-combination-selected.png` });
  }

  async enterSupplier(supplier) {
    await this.frame.getByRole('textbox', { name: 'Supplier Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Supplier Required' }).fill(supplier);
    await this.frame.getByRole('textbox', { name: 'Supplier Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/supplier-entered.png` });
  }

  async enterArticle(article) {
    await this.frame.getByRole('textbox', { name: 'Article Required' }).fill(article);
    await this.frame.getByRole('textbox', { name: 'Article Required' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Article Required' }).fill(article);
    await this.frame.getByRole('textbox', { name: 'Article Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/article-entered.png` });
  }

  async enterPurchaseOrganization(organization) {
    await this.frame.getByRole('textbox', { name: 'Purch. Organization Required' }).fill(organization);
    await this.frame.getByRole('textbox', { name: 'Purch. Organization Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/purchase-organization-entered.png` });
  }

  async enterInfoRecordCategory(category) {
    await this.frame.getByRole('textbox', { name: 'Info Record Category Required' }).fill(category);
    await this.frame.getByRole('textbox', { name: 'Info Record Category Required' }).press('Enter');
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/info-record-category-entered.png` });
  }

  async executeSearch() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(4000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/search-executed.png` });
  }
}

module.exports = PriceConditionPage;
