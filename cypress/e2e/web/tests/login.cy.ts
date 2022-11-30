///<reference types="cypress-tags" />

import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import userProfile from '../pages/UserProfile';
import forgotPassword from '../pages/ForgotPassword';

describe('Login tests', () => {
  beforeEach(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    });
    cy.navigateToHomePage();
    homePage.loginLink().should('be.visible');
    homePage.clickLoginLink();
  });

  it(['smoke','regression'],'Login and navigate to user profile successfully', function() {
    loginPage.enterLoginDetails(this.data.email, Cypress.env('user_password'));
    cy.waitForPageToLoad();
    userProfile.clickUserProfileLink();
    cy.waitForPageToLoad();
    cy.url().should('include','/userprofile');
    userProfile.editProfileButton().should('be.visible');
  });

  it(['regression'],'Check login error is shown when incorrect credentails are provided', function() {
    loginPage.enterLoginDetails(this.data.inCorrectEmail, Cypress.env('user_password'));
    cy.contains('Your username and/or password is incorrect. Please try again.').should('be.visible');
  });

  it(['regression'],'Check email and password field validation errors are shown when invalid email and password are provided', function() {
    loginPage.enterLoginDetails(this.data.invalidEmail, this.data.invalidPassword);
    cy.contains('Please enter a valid e-mail address.').should('be.visible');
    cy.contains('Password must be at least 12 characters long and include one uppercase letter, and one number. Your password cannot include your username.').should('be.visible');
  });

  it(['smoke','regression'],'Navigate to Forgot password successfully', function() {
    loginPage.clickForgotPasswordLink();
    forgotPassword.email().should('be.visible');
    forgotPassword.retrieveButton().should('be.visible');
  });
})