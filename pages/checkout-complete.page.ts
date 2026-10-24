import { Page, expect } from '@playwright/test';

export class CompletePage {
    constructor(private page: Page) { }

//locators:
    locators = {
        CompleteTitle: () => this.page.locator('[data-test="title"]'),
        CompleteHeader: () => this.page.locator('[data-test="complete-header"]'),
        BackHome: () => this.page.locator('[data-test="back-to-products"]')
    }
}