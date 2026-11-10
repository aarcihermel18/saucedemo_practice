import { Page, expect } from '@playwright/test';

export class YourCartPage {
    constructor(private page: Page) { }

    //locators
    locators = {
        YourCartTitle: () => this.page.locator('[data-test="title"]'),
        CheckoutButton: () => this.page.locator('[data-test="checkout"]'),
        ContinueShoppingButton: () => this.page.locator('[data-test="continue-shopping"]'),

    }

    //methods
    async clickCheckoutButton(): Promise<void> {
        await this.locators.CheckoutButton().click();

    }
    async clickContinueShoppingButton(): Promise<void> {
        await this.locators.ContinueShoppingButton().click();
    }

    //actions
    async goToCheckout(): Promise<void> {
        await this.clickCheckoutButton();
    }
    async goToContinueShopping(): Promise<void> {
        await this.clickContinueShoppingButton();
    }

    //assertions
    async assertYourCartTitleIsVisible(): Promise<void> {
        await expect(this.locators.YourCartTitle()).toBeVisible();
    }
    

}