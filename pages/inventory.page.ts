import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addAllItemsToCart(): Promise<void> {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
    await this.page.click('#add-to-cart-sauce-labs-bike-light');
    await this.page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
    await this.page.click('#add-to-cart-sauce-labs-fleece-jacket');
    await this.page.click('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)');
  }

  async goToCart(): Promise<void> {
    await this.page.click('.shopping_cart_badge');
  }
  
}