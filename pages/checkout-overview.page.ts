import { Page, expect } from '@playwright/test';

export class CheckoutOverview {
    constructor(private page: Page) { }

    //locators
    locators = {
        OverviewTitle: () => this.page.locator('[data-test="title"]'),
        FinishButton: () => this.page.locator('[data-test="finish"]'),
        SummaryTotalLabel: () => this.page.locator('[data-test="total-label"]')
    }

    //methods
    async ClickFinishButton(): Promise<void> {
        await this.locators.FinishButton().click()
    }


    //actions

    async GoToFinish(): Promise<void> {
        await this.ClickFinishButton();
    }


    //assertions
    async SummaryTotalLabelShouldBeVisible(): Promise<void> {
        await expect(this.locators.SummaryTotalLabel()).toBeVisible();
    }

}