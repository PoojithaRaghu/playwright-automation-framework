import {test, expect} from '@playwright/test';
import rfqPage from './pages/rfq.page';
import path from 'path';
import attachmentPage from './pages/attachment.page';


test.describe('loginpo', () => {
    
    
    test('pocreation', async ({ page }) => {
        const rfqpage = new rfqPage(page);
        const attachmentpage = new attachmentPage(page);

        

        await page.goto("https://svm-propel.com/auth");
        await expect(page).toHaveTitle("PROPEL");
        await page.getByRole('textbox', { name: 'Enter your email' }).fill('nagarajan.vijayakumar@solverminds.sg');
        await page.getByRole('textbox', { name: 'Enter your password' }).fill('P@ssw0rd');
        await rfqpage.signinbtnclick();
        await rfqpage.pagewait();
        await page.getByText('Purchase Orders', { exact: true }).click();
        await page.getByText('Yet To Confirm', { exact: true }).click();
        await rfqpage.dateclick();
        await rfqpage.selectallclick();
        await rfqpage.searchbtnclick();
        await rfqpage.titlefilterfill('Service-request');
        await rfqpage.editbuttonclick();
        await page.getByRole('combobox', { name: 'Search' }).nth(2)
        await page.getByText('Photographs').click();
        await attachmentpage.uploadpage().uploadfile(path.join(__dirname,'../datas/image.png'));
        await expect(page.locator('svg[data-icon="download"]')).toBeVisible({timeout: 5000});
        
        

        
    });
});
    