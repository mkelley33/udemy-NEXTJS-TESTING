it('displays correct heading when navigating to shows route', () => {
  cy.visit('/');
  cy.findByRole('button', { name: /^shows$/i }).click();
  cy.findByRole('heading', { name: /^upcoming shows$/i });
});

it('displays correct heading when navigating to the bands route', () => {
  cy.visit('/');
  cy.findByRole('button', { name: /^bands$/i }).click();
  cy.findByRole('heading', { name: /^our illustrious performers$/i });
});

it('displays correct band name for band route that existed at build time', () => {
  cy.visit('/bands/1');
  cy.findByRole('heading', { name: /^shamrock pete$/i }).should('exist');
});
