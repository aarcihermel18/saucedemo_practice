import { Page, expect } from '@playwright/test';

export class CompletePage {
    constructor(private page: Page) { }

//locators:
    locators = {
        CompleteTitle: () => this.page.locator('[data-test="title"]'),
        CompleteHeader: () => this.page.locator('[data-test="complete-header"]'),
        BackHome: () => this.page.locator('[data-test="back-to-products"]')
    }

//methods
 async CompleteHeaderIsVisible(): Promise<void> {
    await expect(this.locators.CompleteHeader()).toHaveText('Thank you for your order!');
 }

//actions
    
//assertions
    async assertCompleteTitleIsVisibe(): Promise<void> {
        await expect(this.locators.CompleteTitle()).toBeVisible();
    }
    async assertCompleteHeaderIsVisible(): Promise<void> {
        await expect(this.locators.CompleteHeader()).toBeVisible();
    };
   
}