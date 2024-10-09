import { Page } from 'playwright';

export class GoogleSearchPage {
  constructor(private page: Page) {}

  // Elements
  public searchbar = this.page.locator('//*[@id="APjFqb"]'); 

  // Function to go to Google home page
  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  // Function to search
  async performSearch(query: string) {
    await this.searchbar.fill(query); 
    await this.searchbar.press('Enter'); 
  }
}
