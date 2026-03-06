   import {Page,Locator} from '@playwright/test';

   export default class rfqPage{
    page : Page;
    signinButton: Locator;
    checklandingpage: Locator;
    rfq: Locator;
    draft: Locator;
    date: Locator;
    selectall: Locator;
    searchButton: Locator;
    titleFilter: Locator;
    editrfq: Locator;
    searchrfq: Locator;
    photographsOption: Locator;
    

    constructor(page: Page){
    this.page = page;

        this.signinButton = page.getByRole('button', { name: 'Sign in' })
        this.checklandingpage = page.getByText('Export PDF')
        this.rfq = page.getByText('Request For Quotation')
        this.draft = page.getByText('Draft');
        this.date = page.locator('.ant-picker')
        this.selectall = page.locator('//li[normalize-space()="All"]')
        this.searchButton = page.getByRole('button', { name: 'Search' })
        this.titleFilter = page.getByLabel('Title Filter Input')    
        this.editrfq = page.locator('svg[data-icon="edit"]').nth(1)
        this.searchrfq = page.getByRole('combobox', { name: 'Search' }).nth(1)
        this.photographsOption = page.getByText('Photographs')
    }   

    async signinbtnclick(){
        await this.signinButton.click();
    }
    async pagewait(){
        await this.checklandingpage.waitFor({state: 'visible'});
    }
    async rfqclick(){
        await this.rfq.click();
    }
    async draftclick(){
        await this.draft.click();
    }
    async dateclick(){
        await this.date.click();
    }   
    async selectallclick(){
        await this.selectall.click();
    }
    async searchbtnclick(){
        await this.searchButton.click();
    }   
    async titlefilterfill(text: string){
        await this.titleFilter.fill(text);
    }
    async editbuttonclick(){
        await this.editrfq.click();
    }   
    async dropdownclick(){
        await this.searchrfq.click();
    }
    async photographsoptionclick(){
        await this.photographsOption.click();
    }


   

}

