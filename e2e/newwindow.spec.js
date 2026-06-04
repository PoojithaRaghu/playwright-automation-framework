import { test, expect } from '@playwright/test';

test('should open a new window', async ({page}) => {
    await page.goto('https://testing.svm-propel.com/auth');
    await page.locator('[name="email"]').fill('gokul.velayutham@solverminds.sg');
    await page.locator('[name="password"]').fill('P@ssw0rd');
    await page.locator('button:has-text("Sign In")').click();
    await page.locator('span.ant-menu-title-content').nth(1).click();
    await page.getByText('Fully Quoted').click();
    
    await expect(page.locator('span').filter({ hasText: 'Fully Quoted' }).first()).toBeVisible();
    const rfqFilter = page.getByRole('textbox', {name: 'RFQ No Filter Input'});
    await rfqFilter.waitFor({ state: 'visible' });
    await rfqFilter.fill('CHA-V12-083N26/QOT-R1');
 
    const newTab = page.locator("//span[@aria-label='export']//*[name()='svg']").first();
      
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        newTab.click(),

    ])

    await newPage.waitForLoadState();
    await newPage.locator('.ant-steps-item-title').nth(1).waitFor({ state: 'visible' });


});