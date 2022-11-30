declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command for navigating to home page "https://www.bcg.com"
         */
      navigateToHomePage(): Chainable<any>;
      /**
       * Custom command to wait for page to load
       */
      waitForPageToLoad(): Chainable<any>;
    }
  }