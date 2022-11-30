class HomePage {
    //selectors
    loginLink() {
        return cy.get('span.icon-profile-user-profile-icon',{timeout: Cypress.config().defaultCommandTimeout});
    }

    industriesLink() {
        return cy.get('a.topbar__navLinks--a').contains('Industries');
    }

    capabilitiesLink() {
        return cy.get('li.topbar__navLinks--list').contains('Capabilities');
    }

    digitalBCGLink() {
        return cy.get('li.topbar__navLinks--list').contains('DigitalBCG');
    }

    featuredInsightsLink() {
        return cy.get('li.topbar__navLinks--list').contains('Featured Insights');
    }

    careersLink() {
        return cy.get('li.topbar__navLinks--list').contains('Careers');
    }

    aboutLink() {
        return cy.get('li.topbar__navLinks--list').contains('About');
    }

    sideNav() {
        return cy.get('#toggle-side-nav', {timeout: Cypress.config().defaultCommandTimeout});
    }

    search() {
        return cy.get('.topbar__navLinks--icons.icon-nav-menu-search',{timeout: Cypress.config().defaultCommandTimeout});
    }

    //methods

    clickLoginLink() {
        this.loginLink().click({ multiple: true, force: true});
        cy.contains('Log In To Your Account',{timeout: Cypress.config().defaultCommandTimeout}).should('be.visible');
    }
}

export default new HomePage()