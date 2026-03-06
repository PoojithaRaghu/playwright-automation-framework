import {test, expect} from '@playwright/test';
import rfqPage from './pages/rfq.page'; 
import path from 'path';
import attachmentPage from './pages/attachment.page';


test.describe("Propel website", () => {

    test("loginpage", async ({page}) => {
        
        const rfqpage = new rfqPage(page);
        const attachmentpage = new attachmentPage(page);

        await page.goto("https://svm-propel.com/auth");
        await expect(page).toHaveTitle("PROPEL");
        await page.getByRole('textbox', { name: 'Enter your email' }).fill('nagarajan.vijayakumar@solverminds.sg');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('P@ssw0rd');
        
        await rfqpage.signinbtnclick(); 
        await rfqpage.pagewait();
        await rfqpage.rfqclick();
        await rfqpage.dateclick();
        await rfqpage.selectallclick();
        await rfqpage.searchbtnclick();
        await rfqpage.titlefilterfill('Hexagon Fit Bolt');
        await rfqpage.editbuttonclick();
        await rfqpage.searchrfq.click();
        await rfqpage.photographsOption.click();   
        await attachmentpage.uploadpage().uploadfile(path.join(__dirname,'../datas/image.png'));
        await expect(page.locator('svg[data-icon="download"]')).toBeVisible();
        //await page.locator('svg[data-icon="download"]').click();
        await page.waitForTimeout(2000);    


   
        
     /*test("search and edit RFQ", async ({page}) => {
        let homepage : Homepage;
        homepage = new Homepage(page);

        await page.getByRole('button', { name: 'Sign in' }).click();   
        await expect(page.getByText('Export PDF')).toBeVisible();
        await page.getByText('Request For Quotation').click();
        await page.getByText('Draft').click();
        await page.locator('.ant-picker').click();
        await page.locator('//li[normalize-space()="All"]').click();
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByLabel('Title Filter Input').fill('Main Engine requisition');
        await page.getByLabel('Title Filter Input').fill('Hexagon Fit Bolt');
        await page.locator('svg[data-icon="edit"]').nth(1).click();
        await page.getByRole('combobox', { name: 'Search' }).nth(1).click();
        await page.getByText('Photographs').click();
        */
       
    
        
        /*const file = path.join(__dirname,'../datas/image.png');
        await page.setInputFiles('input[type="file"]', file);
        await page.locator('#upload_1').click();
        await expect(page.locator('svg[data-icon="download"]')).toBeVisible();*/
    
       


    });
    });
    

