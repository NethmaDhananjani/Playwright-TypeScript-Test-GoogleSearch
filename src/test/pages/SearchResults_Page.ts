import { Page } from 'playwright';

export class GoogleSearchResultsPage {
  constructor(private page: Page) {}

   // Locators
  public results = this.page.locator('h3'); 
  public searchInput = this.page.locator('//*[@id="APjFqb"]'); 

  //Function to get the number of results displayed
  async getResultsCount(): Promise<number> {
    return await this.results.count(); 
  }


  //Function to get the text inside the serach bar
  async getSearchTerm(): Promise<string> {
    return await this.searchInput.inputValue(); 
  }
}
