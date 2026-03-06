import { Page,Locator} from "@playwright/test";  

class uploadpage {
page : Page;
fileInput : string;
//uploadButton : Locator;
downloadIcon : Locator;
   
    constructor(page: Page){
    this.page = page;
        this.fileInput = 'input[type="file"]'
        //this.uploadButton = page.locator('#upload_1')
        this.downloadIcon = page.locator('svg[data-icon="download"]')
    }


async uploadfile(filePath: string){
    await this.page.setInputFiles(this.fileInput, filePath);
    //await this.uploadButton.click();
    await this.downloadIcon.waitFor({state: 'visible'});
}
}
export default uploadpage;
    