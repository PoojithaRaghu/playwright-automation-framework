import {test, expect} from '@playwright/test';
import path from 'path/win32';

test.describe('fileupload', () => {

    test('fileupload', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/cart/');
        
        const file = path.join(__dirname, '../datas/blog.png');
        await page.setInputFiles('input[type="file"]', file);

        await page.locator('#upload_1').click();
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully', { timeout: 5000 });

        
    })
    
    
})
