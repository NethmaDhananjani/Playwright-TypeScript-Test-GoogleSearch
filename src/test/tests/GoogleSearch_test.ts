import { chromium } from 'playwright';
import { GoogleSearchPage } from '../pages/GoogleSearch_Page';
import { GoogleSearchResultsPage } from '../pages/SearchResults_Page';
import { test, expect } from 'playwright/test';


(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    const googleSearchPage = new GoogleSearchPage(page);
    const googleResultsPage = new GoogleSearchResultsPage(page);

    const searchQuery = 'Test Automation with Playwright'; 

    await googleSearchPage.navigate();
    console.log('Went to Google');

    await googleSearchPage.performSearch(searchQuery);
    console.log(`Searching for "${searchQuery}"`);

    await page.waitForSelector('h3', { timeout: 60000 });
    console.log('Search results page is loaded');

    const resultsCount = await googleResultsPage.getResultsCount();
    console.log(`Number of results: ${resultsCount}`);

    const searchTermInResults = await googleResultsPage.getSearchTerm();
    await expect(searchTermInResults).toBe('Test Automation with Playwright'); 
    console.log('The search term in the search bar is equal to "Test Automation with Playwright"');

    await browser.close();
    console.log('Browser closed');
})();
