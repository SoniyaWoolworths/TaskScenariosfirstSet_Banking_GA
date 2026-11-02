class ProjectBudgetPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async searchForTransaction(searchTerm) {
    await this.page.getByRole('button', { name: 'Open Search' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('searchbox', { name: 'Search' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('searchbox', { name: 'Search' }).fill(searchTerm);
    await this.page.getByText(searchTerm).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-searched.png` });
  }

  async openZPS145() {
    this.frame = this.page.locator('iframe[name="application-ZGUI-zps145-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/zps145-opened.png` });
  }

  async enterDatabaseProfile(databaseProfile) {
    await this.frame.getByRole('textbox', { name: 'Database prof. Required' }).fill(databaseProfile);
    await this.frame.getByRole('textbox', { name: 'Database prof. Required' }).press('Enter');
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/database-profile-entered.png` });
  }

  async enterProject(project) {
    await this.frame.getByRole('textbox', { name: 'Project' }).fill(project);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/project-entered.png` });
  }

  async enterObjectCurrency(currency) {
    await this.frame.getByRole('textbox', { name: 'Object currency Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Object currency Required' }).fill(currency);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/object-currency-entered.png` });
  }

  async enterPlanVersion(planVersion) {
    await this.frame.getByRole('textbox', { name: 'Plan version Required' }).click();
    await this.frame.getByRole('textbox', { name: 'Plan version Required' }).fill(planVersion);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/plan-version-entered.png` });
  }

  async executeReport() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/report-executed.png` });
  }
}

module.exports = ProjectBudgetPage;
