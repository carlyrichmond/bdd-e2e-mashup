import { $, $$, browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  async getArtists(): Promise<string[]> {
    return $$('.record-item > .record-details > .artist').map(element => {
      return element?.getText(); }
      );
  }
}
