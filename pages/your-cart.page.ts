import { Page } from "@playwright/test";

export class YourCartPage {
    constructor(private page: Page) { }

    //locators
    locators = {
        YourCartTitle: () => this.page.locator('[data-test="title"]'),
        
    }
}