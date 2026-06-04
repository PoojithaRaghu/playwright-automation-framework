import {test} from '@playwright/test';

test('demo', async({ page}) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log(await page.title());
    const products = page.locator('.card-body');
    await page.locator('#userEmail').fill('pooj@gmail.com');
    await page.locator('#userPassword').fill('Poojitha@123');
    await page.locator('#login').click();
    console.log(await page.locator('.card-body b').first().textContent());
    console.log(await page.locator('.card-body b').allTextContents());
    for(let i=0; i< await products.count(); i++){
        if(await products.nth(i).locator('b').textContent() === 'zara coat 3')
            {
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
    
    
   
});