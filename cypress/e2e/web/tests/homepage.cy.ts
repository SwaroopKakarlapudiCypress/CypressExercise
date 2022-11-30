///<reference types="cypress-tags" />

import homePage from '../pages/HomePage';

describe('Homepage tests', () => {
  beforeEach(function () {
    cy.navigateToHomePage();
  });

  it(['regression'],'Check digital bcg link is working', function() {
    homePage.digitalBCGLink().scrollIntoView().click({force:true});
    cy.url().should('include','capabilities/digital-technology-data/overview');
  });

  it(['regression'],'Check homepage links', function() {
    homePage.industriesLink().should('exist');
    homePage.aboutLink().should('exist');
    homePage.capabilitiesLink().should('exist');
    homePage.careersLink().should('exist');
    homePage.featuredInsightsLink().should('exist');
    homePage.sideNav().should('exist');
    homePage.search().should('exist');
  });
})