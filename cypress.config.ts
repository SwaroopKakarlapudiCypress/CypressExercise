import { defineConfig } from "cypress";
import { tagify } from 'cypress-tags';
import { readFileSync } from 'fs';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
      if (config.env.name) {
        const envName = config.env.name;
        const text = readFileSync(`./environments/${envName}.json`);
        const values = JSON.parse(text!.toString());
        config.baseUrl = values.baseUrl;
        config.env = {
          ...values
        }
        return config
      }
    },
    projectId: "k35t9b",
    baseUrl: "https://www.bcg.com",
    chromeWebSecurity: false,
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 10000,
    env: {
      wait: 5000,
      apiUrl: "https://petstore.swagger.io/v2"
    },
    video: false,
    retries: {
      runMode: 5
    }
  },
});
