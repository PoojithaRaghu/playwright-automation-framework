import {test,expect,Page} from '@playwright/test';
import { time } from 'node:console';

test.describe.serial('RFQPO', () => {
    let page : Page;

  test.beforeEach(async ({ page }) => {
    page = await browser.newPage();
    await page.goto('https://svm-propel.com/auth');
    await expect(page).toHaveTitle("PROPEL");
    await page.getByRole('textbox', { name: 'Enter your email' }).fill('nagarajan.vijayakumar@solverminds.sg');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByText('Export PDF')).toBeVisible({ timeout: 5000 });

});

test('rfq', async ({ page }) => {
    await page.getByText('Request For Quotation').click();
    await page.getByText('Draft').click();
    await page.locator('.ant-picker').click();
    await page.locator('//li[normalize-space()="All"]').click();
    await page.getByRole('button', { name: 'Search' }).click();
    
});

test('po', async ({ page }) => {
    await page.getByText('Purchase Order').click();
    await page.locator('.ant-picker').click();
    await page.locator('//li[normalize-space()="All"]').click();
    await page.getByRole('button', { name: 'Search' }).click();
    
});


});
