class UserProfile {
    //selectors

    userProfileLink() {
        return cy.get('a[href="https://www.bcg.com/userprofile"]', {timeout: Cypress.config().defaultCommandTimeout});
    }

    editProfileButton() {
        return cy.get('.edit-btn.view-profile-mode', {timeout: Cypress.config().defaultCommandTimeout});
    }

    saveProfileButton() {
        return cy.get('.edit-btn.edit-profile-mode', {timeout: Cypress.config().defaultCommandTimeout});
    }

    firstName() {
        return cy.get('#FirstName', {timeout: Cypress.config().defaultCommandTimeout});
    }

    middleName() {
        return cy.get('#MiddleName', {timeout: Cypress.config().defaultCommandTimeout});
    }

    lastName() {
        return cy.get('#LastName', {timeout: Cypress.config().defaultCommandTimeout});
    }

    saveButton() {
        return cy.get('button').contains('Save');
    }

    okButton() {
        return cy.get('button').contains('OK');
    }

    subscriptionsLink() {
        return cy.get('#subscription');
    }

    savedContentLink() {
        return cy.get('#savedarticles');
    }

    saveUpdatesButton() {
        return cy.get('.subscriptions__submit-btn');
    }

    logoutButton() {
        return cy.get('.logout-btn.view-profile-mode');
    }
    //methods

    clickUserProfileLink() {
        this.userProfileLink().eq(0).click({force: true});
    }

    enterFirstName(firstName: string) {
        this.firstName().clear().type(firstName);
    }

    enterMiddleName(middleName: string) {
        this.middleName().clear().type(middleName);
    }

    enterLastName(lastName: string) {
        this.lastName().clear().type(lastName);
    }

    clickSubscriptionsLink() {
        this.subscriptionsLink().click();
    }

    clickSavedContents() {
        this.savedContentLink().click();
    }

    clickLogoutButton() {
        this.logoutButton().click();
    }

    save() {
        this.saveButton().click();
    }

    ok() {
        this.okButton().click();
    }

}

export default new UserProfile()