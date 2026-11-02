class WPayPostingRulePage {
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

  async openWPayPostingRule() {
    await this.page.getByRole('link', { name: 'WPAY Posting Rule ZFIN231 Tile' }).click();
    await this.page.waitForTimeout(2000);
    this.frame = this.page.locator('iframe[name="application-ZGUI-zfin231-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/wpay-posting-rule-opened.png` });
  }

  async clickNewEntries() {
    await this.frame.getByRole('button', { name: 'New Entries' }).click();
    await this.page.waitForTimeout(500);
    await this.page.screenshot({ path: `screenshots/${this.testName}/new-entries-clicked.png` });
  }

  async enterFirstRuleDetails(recordType, merchantOrgId, ruleNumber, creditDebit, value, assignmentField, fieldSource, text, assignmentType) {
    await this.frame.locator('input[name="InputField"]').fill(recordType);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox').nth(1).click();
    await this.frame.getByRole('textbox').nth(1).fill(merchantOrgId);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox').nth(2).click();
    await this.frame.getByRole('textbox').nth(2).fill(ruleNumber);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[1,4]_c-btn"]').click();
    await this.frame.getByRole('option', { name: creditDebit }).click();
    await this.page.waitForTimeout(1000);
    await this.frame.locator('[id="M0:46:1[1,5]_c"]').click();
    await this.frame.locator('[id="M0:46:1-mrss-cont-none-content"] input[name="InputField"]').fill(value);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[1,8]_c"]').click();
    await this.frame.locator('input[name="InputField"]').nth(4).fill(assignmentField);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[1,9]_c"]').click();
    await this.frame.locator('input[name="InputField"]').nth(5).fill(fieldSource);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[1,10]_c"]').click();
    await this.frame.locator('[id="M0:46:1[1,10]_c"]').fill(text);
    await this.frame.locator('[id="M0:46:1[1,10]_c"]').press('ArrowRight');
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[1,11]_c"]').click();
    await this.frame.locator('[id="M0:46:1[1,11]_c"]').fill(assignmentType);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/first-rule-entered.png` });
  }

  async enterSecondRuleDetails(recordType, merchantOrgId, ruleNumber, creditDebit, companyCode, glAccount, costCenter, assignmentField, fieldSource, text, assignmentType) {
    await this.frame.getByRole('textbox').nth(4).click();
    await this.frame.getByRole('textbox').nth(4).fill(recordType);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox').nth(5).click();
    await this.frame.getByRole('textbox').nth(5).fill(merchantOrgId);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,3]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,3]_c"]').fill(ruleNumber);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,4]_c"]').click();
    await this.frame.getByRole('option', { name: creditDebit }).click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,7]_c"]').press('ArrowLeft');
    await this.frame.locator('[id="M0:46:1[2,6]_c"]').press('ArrowLeft');
    await this.frame.locator('[id="M0:46:1[2,5]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,5]_c"]').fill(companyCode);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,6]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,6]_c"]').fill(glAccount);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,7]_c-r"]').click();
    await this.frame.locator('[id="M0:46:1[2,7]_c"]').fill(costCenter);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,8]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,8]_c"]').fill(assignmentField);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,9]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,9]_c"]').fill(fieldSource);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,10]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,10]_c"]').fill(text);
    await this.frame.locator('[id="M0:46:1[2,10]_c"]').press('ArrowRight');
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1[2,11]_c"]').click();
    await this.frame.locator('[id="M0:46:1[2,11]_c"]').fill(assignmentType);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/second-rule-entered.png` });
  }

  async saveRules() {
    await this.frame.getByRole('button', { name: 'Save  Emphasized' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/rules-saved.png` });
  }

  async positionToRule(recordType, merchantOrgId, ruleNumber) {
    await this.frame.getByRole('button', { name: 'Position...' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Record Type' }).fill(recordType);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Merch. Org. ID' }).click();
    await this.frame.getByRole('textbox', { name: 'Merch. Org. ID' }).fill(merchantOrgId);
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('textbox', { name: 'Rule Number' }).click();
    await this.frame.getByRole('textbox', { name: 'Rule Number' }).fill(ruleNumber);
    await this.page.waitForTimeout(1000);
    await this.frame.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/positioned-to-rule.png` });
  }

  async deleteRules() {
    await this.frame.locator('.urST5SCMetricInner').first().click();
    await this.page.waitForTimeout(500);
    await this.frame.locator('.urBorderBox.lsSapTable--expandWidth.lsSTCellHeight100.urSTSCOuterDiv.urSTRowUnSelIcon > .urST5SCMetricInner').click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Delete' }).click();
    await this.page.waitForTimeout(500);
    await this.frame.getByRole('button', { name: 'Continue' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/rules-deleted.png` });
  }

  async saveFinal() {
    await this.frame.getByRole('button', { name: 'Save  Emphasized' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/final-save-completed.png` });
  }
}

module.exports = WPayPostingRulePage;
