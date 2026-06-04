import {test, expect} from '@playwright/test';
import excel from 'exceljs';

test('working with excel', async ({ page }) => {
    
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;
    const filePath = 'C:\\Users\\poojitha.raghu\\Downloads\\download.xlsx';
    await download.saveAs(filePath);

    // Update Excel
    await writeExcelTest('Mango','350',{ rowChange: 0, colChange: 2 },filePath);

    // Upload updated file
    await page.locator('#fileToUpload').setInputFiles(filePath);

    // Verify updated value in UI
    await expect(page.getByText('350')).toBeVisible();

});

