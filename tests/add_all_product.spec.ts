import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('User can add all product until checkout', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/inventory/)  
    await inventoryPage.addAllItemsToCart();
    await page.locator('.shopping_cart_badge').click(); 
    await page.locator('[id="checkout"]').click();
    await page.fill('[id="first-name"]','johny');
    await page.fill('#last-name','Sybs');
    await page.fill('[id="postal-code"]','0000');
    await page.locator('[id="continue"]').click();
    await expect(page.locator('.summary_total_label')).toBeVisible();
    await page.locator('#finish').click();
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