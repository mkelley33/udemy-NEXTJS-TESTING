// @ts-check
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
///<reference path="../global.d.ts" />
/// <reference types="@testing-library/cypress" />

import '@testing-library/cypress/add-commands';

// cypress/support/commands.ts

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Cypress.Commands.add<any>('getBySel', (selector, ...args) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  cy.get(`[data-test=${selector}]`, ...args)
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Cypress.Commands.add<any>('getBySelLike', (selector, ...args) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  cy.get(`[data-test*=${selector}]`, ...args)
);

export {};
