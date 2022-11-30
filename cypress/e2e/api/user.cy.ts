import {v4 as uuidv4} from 'uuid';
const user:any = global;
describe('User API tests', function() {
    const username = uuidv4();
    const email = `${uuidv4()}@test.com`;
    const password = uuidv4();

    it(['smoke','regression'], 'POST a new user', function() {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/user`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: {
                "id": 0,
                "username": username,
                "firstName": "Test",
                "lastName": "Test",
                "email": email,
                "password": password,
                "phone": "test",
                "userStatus": 0
              }
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.message).to.be.a('string');
            expect(response.body.type).equal('unknown');
        })
    });

    it(['smoke','regression'], 'GET user by username', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/user/${username}`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.email).equal(email);
            expect(response.body.firstName).equal('Test');
            expect(response.body.id).to.be.a('number');
            expect(response.body.lastName).equal('Test');
            expect(response.body.password).equal(password);
            expect(response.body.phone).equal('test');
            expect(response.body.userStatus).equal(0);
            expect(response.body.username).equal(username);
        })
    });

    it(['smoke','regression'], 'GET user login', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/user/login`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            qs: {
                'username': username,
                'password': password
            }
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.message).to.include('logged in user session');
            expect(response.body.type).equal('unknown')
        })
    });

    it(['smoke','regression'], 'PUT user', function() {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiUrl')}/user/${username}`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: {
                "id": 0,
                "username": username,
                "firstName": "UpdatedTest",
                "lastName": "UpdatedTest",
                "email": email,
                "password": password,
                "phone": "Updatedtest",
                "userStatus": 0
              }
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.message).to.be.a('string');
            expect(response.body.type).equal('unknown');
        })
    });


    it(['smoke','regression'], 'GET user logout', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/user/logout`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            qs: {
                'username': username,
                'password': password
            }
        }).then(function(response){
            expect(response.status).equal(200);
        })
    });

    it(['smoke','regression'], 'DELETE user', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/user/${username}`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            }
        }).then(function(response){
            expect(response.status).equal(200);
        })
    });
});
