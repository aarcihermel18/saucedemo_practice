import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('User can add all items to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  // Add all items to cart
  await inventoryPage.addAllItemsToCart();

  // Go to cart
  await inventoryPage.goToCart();

  // Verify items in cart
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
  await expect(page.getByText('Sauce Labs Bolt T-Shirt')).toBeVisible();
  await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
  await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
});