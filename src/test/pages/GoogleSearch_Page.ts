import { Page } from 'playwright';

export class GoogleSearchPage {
  constructor(private page: Page) {}

  // Locators
  public searchInput = this.page.locator('//*[@id="APjFqb"]'); 

  // Function to go to Google home page
  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  // Function to search
  async performSearch(query: string) {
    await this.searchInput.fill(query); 
    await this.searchInput.press('Enter'); 
  }
}
