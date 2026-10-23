import { Page } from '@playwright/test';

export class FillupFormsPage {
    constructor(private page: Page) { }

    //locators:
    locators = {
        FirstNameInput: () => this.page.locator('[data-test="firstName"]'),
        LastNameInput: () => this.page.locator('[data-test="lastName"]'),
        PostalCodeInput: () => this.page.locator('[data-test="postalCode"]'),
        ContinueButton: () => this.page.locator('[data-test="continue"]'),
    }

    //methods:
    async fillFirstName(firstName: string) {
        await this.locators.FirstNameInput().fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.locators.LastNameInput().fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await this.locators.PostalCodeInput().fill(postalCode);
    }

    //actions:
    async clickContinueButton() {
        await this.locators.ContinueButton().click();
    }
};