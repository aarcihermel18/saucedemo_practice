import { Page, expect } from '@playwright/test';

export class YourCartPage {
    constructor(private page: Page) { }

    //locators
    locators = {
        YourCartTitle: () => this.page.locator('[data-test="title"]'),
        CheckoutButton: () => this.page.locator('[data-test="title"]'),
    }

    //methods
    async clickCheckoutButton(): Promise<void> {
        await this.locators.CheckoutButton().click();
    }

    //actions
    async goToCheckout(): Promise<void> {
        await this.clickCheckoutButton();
    }

    //assertions
    async assertYourCartTitleIsVisible(): Promise<void> {
        await expect(this.locators.YourCartTitle()).toBeVisible();
    }

}