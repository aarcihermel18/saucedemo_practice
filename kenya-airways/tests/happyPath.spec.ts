
import { test, expect } from '@playwright/test';

test('Investigate booking redirect', async ({ page, context }) => {

    // Log navigation in the current tab
    page.on('framenavigated', frame => {
        if (frame === page.mainFrame()) {
            const url = new URL(frame.url());

            console.log('NAVIGATION:', url.hostname + url.pathname);
        }
    });

    // Detect HTTP 403 responses
    page.on('response', response => {
        if (response.status() === 403) {
            const url = new URL(response.url());

            console.log('BLOCKED STATUS:', response.status());
            console.log('BLOCKED URL:', url.hostname + url.pathname);
        }
    });

    // Detect failed requests
    page.on('requestfailed', request => {
        const url = new URL(request.url());

        console.log('FAILED REQUEST:', url.hostname + url.pathname);
        console.log('REASON:', request.failure()?.errorText);
    });

    // Detect a new tab or popup
    context.on('page', newPage => {
        console.log('NEW PAGE OPENED');

        newPage.on('framenavigated', frame => {
            if (frame === newPage.mainFrame()) {
                const url = new URL(frame.url());

                console.log('NEW PAGE NAVIGATION:',
                    url.hostname + url.pathname);
            }
        });
    });

    await page.goto('https://www.kenya-airways.com/en/');
    await page.getByRole('button', { name: 'Trip type Return' }).click();
    await page.getByRole('button', { name: 'One way' }).click();
    await page.getByRole('textbox', { name: 'Where from?' }).click();
    await page.getByRole('button', { name: 'Manila, Philippines Manila' }).first().click();
    await page.getByRole('button', { name: 'Mombasa, Kenya Mombasa Moi' }).click();
    await page.getByRole('button', { name: 'Select departure and return' }).click();
    await page.getByRole('gridcell', { name: 'November 17,' }).click();
    const searchButton = page.locator('#booking-search-button');

    // Verify the button exists
    await expect(searchButton).toBeVisible();

    // Verify the button is enabled
    await expect(searchButton).toBeEnabled();

    // Click Search Flights
    await searchButton.click();


    // Put your existing flight-search interactions here.

    // Click Search Flights
    await page.getByRole('button', {
        name: 'Search for flights with'
    }).click();

    // Temporary diagnostic wait
    await page.waitForTimeout(3000);

    console.log('FINAL PAGE:', page.url());

});
