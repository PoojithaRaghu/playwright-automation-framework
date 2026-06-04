import { test, expect } from '@playwright/test';

test('Calendar', async ({ page }) => {

        await page.goto('https://testing.svm-propel.com/auth');
        await expect(page).toHaveTitle("PROPEL");
        await page.getByRole('textbox', { name: 'Enter your email' }).fill('gokul.velayutham@solverminds.sg');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('P@ssw0rd');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.getByPlaceholder('Start date').click();
        await page.screenshot({ path: 'calendar.png' });
        const month = "Jan";
        const date = '15';
        await page.locator('.ant-picker-month-btn').nth(0).click();
        await page.locator('.ant-picker-cell-inner').filter({ hasText: month }).click();
        await page.locator('.ant-picker-cell-inner').filter({ hasText: date }).nth(0).click();
        await page.getByRole('button', { name: 'Search' }).click();


});
        