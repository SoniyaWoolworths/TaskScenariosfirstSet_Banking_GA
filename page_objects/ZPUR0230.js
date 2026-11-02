class HedgeRatePage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  }

  async navigateToMasterData() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Master Data' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/master-data-menu.png` });
  }

  async openUpdatingHedgeRate() {
    await this.page.getByRole('link', { name: 'Updating Hedge Rate ZPUR0230' }).click();
    await this.page.waitForTimeout(2000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zpur0230-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/hedge-rate-opened.png` });
  }

  async clickNewEntries() {
    await this.frame.getByRole('button', { name: 'New Entries' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/new-entries-clicked.png` });
  }

  async enterHedgeRateDetails(merchandiseCategory, fromCurrency, toCurrency, date = null, source, rate) {
    const dateToUse = date || this.getCurrentDate();
    await this.frame.locator('input[name="InputField"]').fill(merchandiseCategory);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox').nth(2).click();
    await this.frame.getByRole('textbox').nth(2).fill(fromCurrency);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox').nth(3).click();
    await this.frame.getByRole('textbox').nth(3).fill(toCurrency);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox').nth(4).click();
    await this.frame.getByRole('textbox').nth(4).fill(dateToUse);
    await this.page.waitForTimeout(1000);
    await this.frame.locator('[id="M0:46:1[1,6]_c"]').click();
    await this.frame.locator('input[name="InputField"]').nth(4).fill(source);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[1,7]_c-r"]').click();
    await this.frame.locator('input[name="InputField"]').nth(5).fill(rate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/hedge-rate-details-entered.png` });
  }

  async saveHedgeRate() {
    await this.frame.getByRole('button', { name: 'Save  Emphasized' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/hedge-rate-saved.png` });
  }

  async updateHedgeRate(oldRate, newRate) {
    await this.frame.getByText(oldRate, { exact: true }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('gridcell', { name: oldRate }).locator('input[name="InputField"]').fill(newRate);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/hedge-rate-updated.png` });
  }

  async saveUpdatedRate() {
    await this.frame.getByRole('button', { name: 'Save  Emphasized' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/updated-rate-saved.png` });
  }

  async clickDisplay() {
    await this.frame.getByRole('button', { name: 'Display  Emphasized' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/display-clicked.png` });
  }

  async positionToRecord(merchandiseCategory, fromCurrency, toCurrency, date = null) {
    const dateToUse = date || this.getCurrentDate();
    await this.frame.getByRole('button', { name: 'Position...' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Mdse Catgry' }).fill(merchandiseCategory);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'From currency' }).click();
    await this.frame.getByRole('textbox', { name: 'From currency' }).fill(fromCurrency);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'To-currency' }).click();
    await this.frame.getByRole('textbox', { name: 'To-currency' }).fill(toCurrency);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Date' }).click();
    await this.frame.getByRole('textbox', { name: 'Date' }).fill(dateToUse);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/positioned-to-record.png` });
  }
}

module.exports = HedgeRatePage;
