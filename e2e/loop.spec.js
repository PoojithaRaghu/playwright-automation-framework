import { test } from '@playwright/test';

test('should open a new window', async ({page}) => {
    await page.goto('https://testing.svm-propel.com/auth');
    await page.locator('[name="email"]').fill('gokul.velayutham@solverminds.sg');
    await page.locator('[name="password"]').fill('P@ssw0rd');
    await page.locator('button:has-text("Sign In")').click();
    await page.locator('span.ant-menu-title-content').nth(1).click();
    await page.getByText('Draft').click();
    
    //await expect(page.locator('span').filter({ hasText: 'Draft' }).first()).toBeVisible();
    const rfqFilter = page.getByRole('textbox', {name: 'RFQ No Filter Input'});
    await rfqFilter.waitFor({ state: 'visible' });
    await rfqFilter.fill('TRNS/O1/RFQ/0153/2023-R3');
    await page.locator('[data-icon="edit"]').nth(2).click();
    await page.getByText('Delivery Details', { exact: true }).click();
    const incoterms = page.locator('.ant-select-item-option-content');

    const count = await incoterms.count();

    for (let i = 0; i < count; i++) {
    const text = await incoterms.nth(i).textContent();

        if (text?.trim() === 'DAP - Delivered at Place') {
        await incoterms.nth(i).click();
        break;
        }
}
    await page.locator(':text-is("Save As Draft")').click();
    
});