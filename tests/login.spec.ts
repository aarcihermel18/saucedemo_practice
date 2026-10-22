import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test('User can login to SauceDemo', async ({ page }) => {
const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
}); 

test('User is locked out of Saucedemo', async ({ page }) => {
const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

test('User can login to SauceDemo with problem user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('problem_user', 'secret_sauce');
  const images = page.locator('.inventory_item_img img');
  await expect(images).toHaveCount(6); // 6 products
  for (let i = 0; i < 6; i++) {
    // Check exact src for broken image
  await expect(images.nth(i)).toHaveAttribute('src', '/assets/sl-404-Cq1a9k9X.jpg');
  }
});