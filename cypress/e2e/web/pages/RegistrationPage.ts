class RegistrationPage {
    //selectors
    firstName() {
        return cy.get('#FirstName',{timeout: Cypress.config().defaultCommandTimeout});
    }

    lastName() {
        return cy.get('#LastName',{timeout: Cypress.config().defaultCommandTimeout});
    }

    email() {
        return cy.get('#Email', {timeout: Cypress.config().defaultCommandTimeout});
    }

    password() {
        return cy.get('#Password', {timeout: Cypress.config().defaultCommandTimeout});
    }

    confirmPassword() {
        return cy.get('#ConfirmPassword', {timeout: Cypress.config().defaultCommandTimeout});
    }

    privacyAgreement() {
        return cy.get('#PrivacyAgreement', {timeout: Cypress.config().defaultCommandTimeout});
    }
}

export default new RegistrationPage()