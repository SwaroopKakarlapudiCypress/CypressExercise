class ForgotPassword {

    email() {
        return cy.get('#username', {timeout: Cypress.config().defaultCommandTimeout});
    }

    retrieveButton() {
        return cy.contains('Retrieve', {timeout: Cypress.config().defaultCommandTimeout});
    }
}

export default new ForgotPassword()