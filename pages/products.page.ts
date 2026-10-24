import { Page, expect } from '@playwright/test';

export class InventoryPage {

  constructor(private page: Page) { }

  // locators:
  locators = {
    addToCartBackpack: () => this.page.locator('#add-to-cart-sauce-labs-backpack'),
    addToCartBikeLight: () => this.page.locator('#add-to-cart-sauce-labs-bike-light'),
    addToCartBoltTShirt: () => this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
    addToCartFleeceJacket: () => this.page.locator('#add-to-cart-sauce-labs-fleece-jacket'),
    addToCartAllTheThingsTShirt: () => this.page.locator('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)'),
    shoppingCartLink: () => this.page.locator('.shopping_cart_link'),
    shoppingCartBadge: () => this.page.locator('.shopping_cart_badge'),
    checkoutButton: () => this.page.locator('#checkout'),
    firstNameInput: () => this.page.locator('#first-name'),
    lastNameInput: () => this.page.locator('#last-name'),
    postalCodeInput: () => this.page.locator('#postal-code'),
    continueButton: () => this.page.locator('#continue'),
    finishButton: () => this.page.locator('#finish'),
  }

  //methods:
  async addAllItemsToCart(): Promise<void> {
    await this.locators.addToCartBackpack();
    await this.locators.addToCartBikeLight();
    await this.locators.addToCartBoltTShirt();
    await this.locators.addToCartFleeceJacket();
    await this.locators.addToCartAllTheThingsTShirt();
  }
  //actions:
  async goToCart(): Promise<void> {
    await this.locators.shoppingCartLink().click();
  }

  // assertions:

}