import { Page } from "@playwright/test";
import uploadpage from "./component.ts/upload.component";

class attachmentPage{
    page : Page;
    constructor(page: Page)
    {
        this.page = page;
    }
    uploadpage(){
        return new uploadpage(this.page);
}
}
export default attachmentPage;