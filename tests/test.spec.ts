import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { FillupFormsPage } from '../pages/fillup-forms.page';

test.describe('Add all product to cart', () => {
  test('User can add all product until checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.locators.addToCartBackpack().click();
    await expect(inventoryPage.locators.shoppingCartBadge()).toHaveText('1');
    await inventoryPage.locators.shoppingCartLink().click();
    await expect(page).toHaveURL(/cart/);
    const fillupFormsPage = new FillupFormsPage(page);
    await fillupFormsPage.fillFirstName('John');
    await fillupFormsPage.fillLastName('Doe');
    await fillupFormsPage.fillPostalCode('12345');
    await fillupFormsPage.clickContinueButton();
    await expect(page).toHaveURL(/checkout-step-two/);
    await expect(inventoryPage.locators.finishButton()).toBeVisible();
    await page.locator('#finish').click();
    await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  })

  test('User can add bike light to cart and checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.locators.addToCartBikeLight().click();
    await expect(inventoryPage.locators.shoppingCartBadge()).toHaveText('1');
    await inventoryPage.locators.shoppingCartLink().click();
    await expect(page).toHaveURL(/cart/);
    await inventoryPage.locators.checkoutButton().click();
    await inventoryPage.locators.firstNameInput().fill('John');
    await inventoryPage.locators.lastNameInput().fill('Doe');
    await inventoryPage.locators.postalCodeInput().fill('12345');
    await inventoryPage.locators.continueButton().click();
    await expect(page).toHaveURL(/checkout-step-two/);
    await inventoryPage.locators.finishButton().click();
    await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  })
});

