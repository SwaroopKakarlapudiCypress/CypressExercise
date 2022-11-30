### Installation
Install the Node.js packages
```
$ npm install
```

### Test Runner
Open test runner
```
$ npm run cy:open
```

### Run Tests

Run all /*.cy.ts test files
```
$ npm run cy:run
```

Run web smoke tests
```
$ npm run web:smoke
```

Run web smoke tests in staging
```
$ npm run web:smoke:staging
```

Run web smoke tests in qa
```
$ npm run web:smoke:qa
```

Run web smoke tests using chrome headless
```
$ npm run web:smoke:chrome:headless
```

Run web smoke tests using chrome headed
```
$ npm run web:smoke:chrome:headed
```

Run web regression tests
```
$ npm run web:regression
```

Run api smoke tests
```
$ npm run api:smoke
```

Run api regression tests
```
$ npm run api:regression
```

### Cypress Dashboard
Record test results in dashboard
```
$ npm run cy:run:record
https://cloud.cypress.io/projects/k35t9b/runs
```

### cypress.env.json
cypress.env.json with secrets is required to run the test locally
```
apiKey CYPRESS_RECORD_KEY user_password
```