import { TableDefinition } from "cucumber";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on the home page", () => {
  cy.visit('/');
});

When('I do nothing', () => {
  return;
});

Then('I should see the title {string}', (expectedTitle: string) => {
  cy.contains(expectedTitle);
});

Then('I should see the following artists', (dataTable: TableDefinition) => { 
  const expectedArtists: string[] = dataTable.rows().map((recordItem: string[]) => {
    return recordItem[0];
  });

  cy.get('.record-item > .record-details > .artist').should((artists) => {
    expect(artists).to.have.length(3);
    expect(artists.eq(0)).to.contain(expectedArtists[0]);
    expect(artists.eq(1)).to.contain(expectedArtists[1]);
    expect(artists.eq(2)).to.contain(expectedArtists[2]);
  })
});