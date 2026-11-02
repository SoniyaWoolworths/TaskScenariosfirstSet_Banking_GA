class WPayFeeUploadPage {
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

  async openUploadProgramWPayFee() {
    await this.page.getByRole('link', { name: 'Upload Program-WPAY Fee' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfin235-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/upload-program-opened.png` });
  }

  async selectUpdateOption() {
    await this.frame.getByRole('radio', { name: 'Update' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/update-selected.png` });
  }

  async selectUploadOption() {
    await this.frame.getByRole('radio', { name: 'Upload' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/upload-selected.png` });
  }

  async uploadFile(filePath) {
    await this.frame.getByRole('textbox', { name: 'Directory' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('#ls-inputfieldhelpbutton').click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('input[type="file"]').first().setInputFiles(filePath);
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/file-uploaded.png` });
  }

  async executeUpload() {
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/upload-executed.png` });
  }

  async selectManualOption() {
    await this.frame.getByRole('radio', { name: 'Manual' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/manual-selected.png` });
  }

  async executeManual() {
    await this.frame.getByRole('button', { name: 'Execute  Emphasized' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/manual-executed.png` });
  }

  async positionToRecord(processingType, merchantOrgId, ruleNumber) {
    await this.frame.getByRole('button', { name: 'Position...' }).click();
    await this.frame.getByRole('textbox', { name: 'Processing Type' }).fill(processingType);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Merch. Org. ID' }).click();
    await this.frame.getByRole('textbox', { name: 'Merch. Org. ID' }).fill(merchantOrgId);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Rule Number' }).click();
    await this.frame.getByRole('textbox', { name: 'Rule Number' }).fill(ruleNumber);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/positioned-to-record.png` });
  }
}

module.exports = WPayFeeUploadPage;
