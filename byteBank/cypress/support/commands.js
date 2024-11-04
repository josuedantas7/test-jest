import '@testing-library/cypress/add-commands';

const DATABASE_URL = process.env.DATABASE_URL || 'http://localhost:3001';

Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`);
})