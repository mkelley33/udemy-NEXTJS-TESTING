import { generateNewBand } from '@/__tests__/__mocks__/fakeData/newBand';
import { generateRandomId } from '@/lib/features/reservations/utils';

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

it('displays an error message when a band is not found', () => {
  cy.visit('/bands/12345');
  cy.findByRole('heading', { name: /error: band not found/i }).should('exist');
});

it('displays name for band that was not present at build time', () => {
  const bandId = generateRandomId();
  const newBand = generateNewBand(bandId);
  cy.task('addBand', newBand).visit(`/bands/${newBand.id}`);
  cy.findByRole('heading', { name: /avalanche of cheese/i });
});
