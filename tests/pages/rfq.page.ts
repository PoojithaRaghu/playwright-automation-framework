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
    deliverydetails: Locator;
    leaddays: Locator;
    currency: Locator;
    Itemdetails: Locator;   
    confirm: Locator;
    checkcurrency: Locator;
    yettoquote: Locator;

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
        this.deliverydetails = page.getByText('Delivery Details', { exact: true })
        this.leaddays = page.getByRole('spinbutton', { name: 'Lead Time Days *' })
        this.currency = page.locator('span.ant-select-selection-item')
        this.Itemdetails = page.getByText('Item Details', { exact: true })
        this.confirm = page.getByText('Confirm', { exact: true })
        this.checkcurrency = page.locator('span.ant-select-selection-item', { hasText: 'INDIAN RUPEE' })
        this.yettoquote = page.getByText('Yet To Quote', { exact: true })

        
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
    async deliverydetailsclick(){
        await this.deliverydetails.click();
    }
    async fillLeaddays(value: string){
        await this.leaddays.fill(value);
    }
    async currencyclick(){
        await this.currency.click();
    }

    async itemdetailsclick(){
        await this.Itemdetails.click();
    }

    async confirmclick(){
        await this.confirm.click();
    }
    async checkcurrencyclick(){
        await this.checkcurrency.waitFor({state: 'visible'});
    }
    async yettoquoteclick(){
        await this.yettoquote.click();
    }
}

