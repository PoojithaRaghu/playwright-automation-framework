import { test } from '@playwright/test';

test('UI testing', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await page.pause();
    //await page.locator('#signInBtn').click();
});
