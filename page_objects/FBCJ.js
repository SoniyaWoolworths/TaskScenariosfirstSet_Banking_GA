class CashJournalPage {
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

  async openPostCashJournalEntries() {
    await this.page.getByRole('link', { name: 'Post Cash Journal Entries Tile' }).click();
    await this.page.waitForTimeout(1000);
    this.frame = this.page.locator('iframe[name="application-CashJournal-enterCashJournalEntry-iframe"]').contentFrame();
    await this.page.screenshot({ path: `screenshots/${this.testName}/cash-journal-opened.png` });
  }

  async changeCashJournal() {
    await this.frame.getByRole('button', { name: 'Change Cash Journal', exact: true }).click();
    await this.frame.getByRole('button', { name: 'Cont. (Enter)' }).click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/cash-journal-changed.png` });
  }

  async enterJournalEntry(description, postingKey, text, account, businessArea, costCenter1, costCenter2) {
    await this.frame.locator('[id="M0:46:1:2B305:1[5,1]_c"]').fill(description);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1:2B305:1[5,2]_c"]').click();
    await this.frame.locator('[id="M0:46:1:2B305:1[5,2]_c"]').fill(postingKey);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1:2B305:1[5,9]_c"]').click();
    await this.frame.locator('[id="M0:46:1:2B305:1[5,9]_c"]').fill(text);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1:2B305:1[5,10]_c"]').click();
    await this.frame.locator('[id="M0:46:1:2B305:1[5,10]_c"]').fill(account);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1:2B305:1[5,11]_c"]').click();
    await this.frame.locator('[id="M0:46:1:2B305:1[5,11]_c"]').fill(businessArea);
    await this.page.waitForTimeout(1000);
    await this.frame.locator('[id="M0:46:1:2B305:1[5,11]_c"]').press('ArrowRight');
    await this.frame.locator('[id="M0:46:1:2B305:1[5,13]_c"]').click();
    await this.frame.locator('[id="M0:46:1:2B305:1[5,13]_c"]').fill(costCenter1);
    await this.page.waitForTimeout(500);
    await this.frame.locator('[id="M0:46:1:2B305:1[5,14]_c"]').click();
    await this.frame.locator('[id="M0:46:1:2B305:1[5,14]_c"]').fill(costCenter2);
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/journal-entry-filled.png` });
  }

  async selectEntry() {
    await this.frame.locator('[id="M0:46:1:2B305:1[5,0]"]').click();
    await this.page.waitForTimeout(1000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/entry-selected.png` });
  }

  async postSelectedEntry() {
    await this.frame.getByRole('button', { name: 'Post Sel.' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.screenshot({ path: `screenshots/${this.testName}/entry-posted.png` });
  }
}

module.exports = CashJournalPage;
