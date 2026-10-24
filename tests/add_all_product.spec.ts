import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/products.page';

test.describe('Add all product to cart', () => {

  test('User can add all product until checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/)
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addAllItemsToCart();
    await inventoryPage.locators.shoppingCartLink().click();
    await inventoryPage.locators.checkoutButton().click();
    await inventoryPage.locators.firstNameInput().fill('John');
    await inventoryPage.locators.lastNameInput().fill('Doe');
    await inventoryPage.locators.postalCodeInput().fill('12345');
    await inventoryPage.locators.continueButton().click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await inventoryPage.locators.finishButton().click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();

  })

  test('User can add all product until checkout with problem user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)
    await inventoryPage.addAllItemsToCart();
  })

  test('User can add all product until checkout with performance user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    await loginPage.goto();
    await loginPage.login('performance_glitch_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)
    await inventoryPage.addAllItemsToCart();
  })

  test('User can add all product until checkout with locked user', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce')
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  })
});

