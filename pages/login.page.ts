import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

//locators:  
  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com');
  }


//methods:
  async login(username: string, password: string): Promise<void> {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

//actions:
  async isLoggedIn(): Promise<boolean> {
    return await this.page.isVisible('.inventory_list');
  }

//assertions:
  
}