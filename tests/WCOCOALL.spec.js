import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' },//BankingAccountant
  { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' },//OHDAccountant
  { username: process.env.USERNAME3, password: process.env.PASSWORD3, name: 'User3' },//DSISystemSpecialist
  { username: process.env.USERNAME4, password: process.env.PASSWORD4, name: 'User4' },//DSIManager
  { username: process.env.USERNAME5, password: process.env.PASSWORD5, name: 'User5' },//EEIAccountant
  { username: process.env.USERNAME6, password: process.env.PASSWORD6, name: 'User6' },//EEIAccountingManager
  { username: process.env.USERNAME7, password: process.env.PASSWORD7, name: 'User7' },//PAAccountant
  { username: process.env.USERNAME8, password: process.env.PASSWORD8, name: 'User8' },//PAAccountingManager
  { username: process.env.USERNAME9, password: process.env.PASSWORD9, name: 'User9' },//RetailAccountant
  { username: process.env.USERNAME10, password: process.env.PASSWORD10, name: 'User10' },//RetailSnrAccountant
];

const usersToTest = [3, 4, 9, 10]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
  test(`testWCOCOALL- ${cred.name} (${cred.username})`, async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).nth(0).click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Contracts Condition' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Contract Type' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Contract Type' }).fill('ZO12');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Contract Type' }).press('Enter');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('div').filter({ hasText: /^Condition Contract Type$/ }).nth(2).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Condition Contract Type').nth(1).fill('ZPBP');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Condition Contract Type').nth(1).press('Enter');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Created On' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  //await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Previous Month').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByLabel('February 2026 Tuesday Week 7').getByText('10').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Date of Condition Contract').nth(1).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Previous Month').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByLabel('March 2026 Tuesday Week 11').getByText('10').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('dialog', { name: 'Find Variant' }).getByLabel('Created By').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('dialog', { name: 'Find Variant' }).getByLabel('Created By').press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('dialog', { name: 'Find Variant' }).getByLabel('Created By').fill('');
  //await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByText('OPEN EX BIG W').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  
  });
}