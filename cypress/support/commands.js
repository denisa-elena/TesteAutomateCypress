// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { expect } = require("chai")

// Cypress.Commands.add('loginUI', () => {
//     cy.visit('https://www.saucedemo.com/');
//     cy.get('#user-name').type('standard_user');
//     cy.get('#password').type('secret_sauce');
//     cy.get('#login-button').click();
// });

Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.session([username, password], () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  },{
    cacheAcrossSpecs: true // <--- THIS is the secret sauce
  });
  cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
});