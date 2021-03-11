before(() => {
  cy.visit('/');
});

it('loads the collection title', () => {
  cy.contains('Carly\'s Record Collection');
});

it('shows all my records', () => {
  cy.get('.record-item').should('have.length', 3);
});