class InterfaceControlPage {
  constructor(page, testName) {
    this.page = page;
    this.frame = null;
    this.testName = testName;
  }

  async navigateToTransaction() {
    await this.page.getByRole('button', { name: 'More' }).click();
    await this.page.waitForTimeout(500);
    await this.page.getByRole('menuitem', { name: 'Transaction' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/transaction-menu.png` });
  }

  async openInterfaceControlTransaction() {
    await this.page.getByRole('link', { name: 'Interface Control Transaction' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zint-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/interface-control-opened.png` });
  }

  async clickInputFieldHelp() {
    await this.frame.locator('#ls-inputfieldhelpbutton').click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/input-field-help-clicked.png` });
  }

  async executeGo() {
    await this.frame.getByRole('button', { name: 'Go  Emphasized' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/go-executed.png` });
  }

  async clickOk() {
    await this.frame.getByRole('button', { name: 'OK  Emphasized' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/ok-clicked.png` });
  }

  async scheduleInterface() {
    await this.frame.getByRole('button', { name: 'Schedule Interface  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/interface-scheduled.png` });
  }
}

module.exports = InterfaceControlPage;
