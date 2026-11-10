import { test as base } from '@playwright/test';
import { CheckoutOverview } from '../pages/checkout-overview.page';
import { InventoryPage } from '../pages/products.page';

type MyFixtures = {
    checkoutOverview: CheckoutOverview;
    productsPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
    checkoutOverview: async ({ page }, use) => {
        const checkoutOverview = new CheckoutOverview(page);
        await use(checkoutOverview);
    },
    productsPage: async ({ page }, use) => {
        const productsPage = new InventoryPage(page);
        await use(productsPage);
    },

});
