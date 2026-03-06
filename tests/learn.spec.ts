import {test,expect} from '@playwright/test';

test.describe("loginpage", () => {

    test("login", async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/");

        const logo = await page.getByAltText('Practice E-Commerce Site');
        await expect(logo).toBeVisible();

        await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();
        await page.getByRole('textbox', { name: 'Name *' }).fill('pooj');
        await page.getByRole('textbox', { name: 'Email *' }).fill('poo@gmail.com');
        await page.getByRole('textbox', { name: 'Phone *' }).fill('9898989898');

        
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByText('Thanks for contacting us! We will be in touch with you shortly');
     
        

        
    })
    
    
});
