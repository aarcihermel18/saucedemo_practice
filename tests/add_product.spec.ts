import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/products.page';
import { FillupFormsPage }  from '../pages/checkout.page';
 
test.describe('Add product to cart', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('User can add Sauce Labs Backpack to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.locators.addToCartBackpack().click();
    await expect(inventoryPage.locators.shoppingCartBadge()).toHaveText('1');
    await inventoryPage.locators.shoppingCartBadge().click();
  });

  test('User can add Sauce Labs Bike Light to the cart', async ({ page }) => {
    await page.locator('img[alt="Sauce Labs Bike Light"]').click();
    await page.locator('#add-to-cart').click();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
    await page.locator('#checkout').click();
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '5555');
    await page.locator('#continue').click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.locator('#finish').click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await page.locator('#back-to-products').click();
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('User can add Sauce Labs Bolt T-Shirt to the cart', async ({ page }) => {
    await expect(page.getByText('Products')).toBeVisible();
    await page.locator('img[alt="Sauce Labs Bolt T-Shirt"]').click();
    await page.locator('#add-to-cart').click();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();
    await page.fill('#first-name', 'michael');
    await page.fill('#last-name', 'mendoza');
    await page.fill('#postal-code', '22222');
    await page.locator('#continue').click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.locator('#finish').click()
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  });

  test('User can add Sauce Labs Fleece Jacket', async ({ page }) => {
    await expect(page.getByText('Products')).toBeVisible();
    await page.locator('img[alt="Sauce Labs Fleece Jacket"]').click();
    await page.locator('#add-to-cart').click();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();
    await page.fill('#first-name', 'james');
    await page.fill('#last-name', 'doeee');
    await page.fill('#postal-code', '4444');
    await page.locator('#continue').click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.locator('#finish').click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  })

  test('User can add Sauce Labs Onesie to the cart', async ({ page }) => {
    await expect(page.getByText('Products')).toBeVisible();
    await page.locator('img[alt="Sauce Labs Onesie"]').click();
    await page.locator('#add-to-cart').click();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();
    await page.fill('#first-name', 'mike');
    await page.fill('#last-name', 'aAster');
    await page.fill('#postal-code', '1111');
    await page.locator('#continue').click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.locator('#finish').click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  })

  test('Test.allTheThings() T-Shirt (Red)', async ({ page }) => {
    await page.locator('img[alt="Test.allTheThings() T-Shirt (Red)"]').click();
    await page.locator('#add-to-cart').click();
    await expect(page.getByText('Remove')).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
    await page.locator('#checkout').click();
    await page.fill('#first-name', 'tirso');
    await page.fill('#last-name', 'Tapao');
    await page.fill('#postal-code', '432433');
    await page.locator('#continue').click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.locator('#finish').click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();

  })
});