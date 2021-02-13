import { Before, Given, TableDefinition, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am on the home page', async () => {
  await page.navigateTo();
});

When('I do nothing', () => {});

Then('I should see the title {string}', async (expectedTitle: string) => {
  expect(await page.getTitleText()).to.equal(expectedTitle);
});

Then('I should see the following artists', async (dataTable: TableDefinition) => { 
  const expectedArtists: string[] = dataTable.rows().map(recordItem => {
    return recordItem[0];
  });

  const artists: string[] = await page.getArtists();
  expect(artists.length).to.eq(expectedArtists.length);

  for (let i in artists) {
    expect(artists[i]).to.eq(expectedArtists[i])
  }
  
});