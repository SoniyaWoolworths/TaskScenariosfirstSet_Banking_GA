class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled#Shell-home';
  }

  async navigateToLogin(testName) {
    await this.page.goto(this.url);
    await this.page.screenshot({ path: `screenshots/${testName}/login-page-loaded.png` });
  }

  async login(username, password, testName) {
    await this.page.getByRole('textbox', { name: 'User' }).click();
    await this.page.getByRole('textbox', { name: 'User' }).fill(username);
    await this.page.waitForTimeout(500);
    await this.page.getByRole('textbox', { name: 'Password' }).click();
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'Log On' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${testName}/login-completed.png` });
  }
}

module.exports = LoginPage;
