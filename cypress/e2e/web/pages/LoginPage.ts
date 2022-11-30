class LoginPage {
    //selectors
    signUpLink() {
        return cy.get('button.login-to-signup',{timeout:Cypress.config().defaultCommandTimeout});
    }

    email() {
        return cy.get('#LoginEmail',{timeout: Cypress.config().defaultCommandTimeout});
    }

    password() {
        return cy.get('#LoginPassword', {timeout: Cypress.config().defaultCommandTimeout});
    }

    signIn() {
        return cy.contains('Sign In', {timeout: Cypress.config().defaultCommandTimeout});
    }

    forgotPasswordLink() {
        return cy.get('.js-forgot-password', {timeout: Cypress.config().defaultCommandTimeout});
    }

    //methods

    clickForgotPasswordLink() {
        this.forgotPasswordLink().click();
    }

    enterLoginDetails(email: string, password: string) {
        this.email().type(email);
        this.password().type(password);
        this.signIn().click();
    }
}

export default new LoginPage()