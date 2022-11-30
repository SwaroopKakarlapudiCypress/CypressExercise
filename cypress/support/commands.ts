///<reference types="cypress-iframe" />

Cypress.Commands.add('navigateToHomePage', function (){
    cy.visit('/');
    cy.url().should('include','bcg');
    cy.frameLoaded('.truste_popframe');
    cy.iframe('.truste_popframe').find('.call',{timeout: Cypress.config().defaultCommandTimeout}).click();
    cy.waitForPageToLoad();
    cy.scrollTo('top');
});

Cypress.Commands.add('waitForPageToLoad', function() {
    cy.wait(Cypress.env().wait);
});