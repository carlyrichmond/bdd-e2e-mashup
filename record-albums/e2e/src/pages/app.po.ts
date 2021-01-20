import { $$, browser, by, element, WebElement } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  async getArtist(): Promise<string> {
    return element(by.css('.artist')).getText();
  }

  async getArtists(): Promise<string[]> {
    return $$('.record-item > .artist').map(element => {
      return element?.getText(); }
      );
  }
}
