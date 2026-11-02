import { test, expect } from '@playwright/test';

test('tests_ALR_87013336', async ({ page }) => {
  // US4 :
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :
  // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME1);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD1);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Project Budget Budget/Actual/' }).click();
   await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).click();
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).click();
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).fill('H.3924');
  await page.locator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]').contentFrame().getByRole('textbox', { name: 'Project' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-Project-analyzeBudgetHierarchicallyByBudgetActualCommAssgn-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});