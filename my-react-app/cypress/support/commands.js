// cypress/support/commands.js

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/entrar');
  cy.get('input[name="email"]').should('be.visible').type(email);
  cy.get('input[name="password"]').should('be.visible').type(password);
  cy.get('button[class="_button_1j82j_137"]').click();
});
