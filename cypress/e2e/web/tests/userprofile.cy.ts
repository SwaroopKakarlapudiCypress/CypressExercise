///<reference types="cypress-tags" />

import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import userProfile from '../pages/UserProfile';
import { v4 as uuidv4 } from 'uuid';

const firstName = uuidv4();
const lastName = uuidv4();
const middleName = uuidv4();

describe('User profile tests', () => {
  beforeEach(function () {
    cy.fixture('login').then(function (data) {
        cy.navigateToHomePage();
        homePage.loginLink().should('be.visible');
        homePage.clickLoginLink();
        loginPage.enterLoginDetails(data.email, Cypress.env('user_password'));
        cy.waitForPageToLoad();
        userProfile.clickUserProfileLink();
        cy.waitForPageToLoad();
        cy.url().should('include','/userprofile');
        userProfile.editProfileButton().should('be.visible');
    });
  });

  it(['smoke','regression'],'Update profile information', function() {
    userProfile.editProfileButton().click();
    userProfile.saveProfileButton().should('be.visible');
    userProfile.enterFirstName(firstName);
    userProfile.enterMiddleName(middleName);
    userProfile.enterLastName(lastName);
    userProfile.save();
    cy.contains('Saved Successfully').should('be.visible');
    userProfile.ok();
    userProfile.editProfileButton().should('be.visible');
  });

  it(['regression'], 'Check subscriptions', function() {
    userProfile.subscriptionsLink().should('be.visible');
    userProfile.clickSubscriptionsLink();
    cy.url().should('include','subscription');
    userProfile.saveUpdatesButton().should('be.visible');
  });

  it(['regression'], 'Check saved contents', function() {
    userProfile.savedContentLink().should('be.visible');
    userProfile.clickSavedContents();
    cy.url().should('include','savedarticles');
  });

  it(['regression'], 'logout', function(){
    userProfile.logoutButton().should('be.visible');
    userProfile.clickLogoutButton();
  });
})