const pet:any = global;
describe('Pet API tests', function() {

    it(['smoke','regression'], 'POST a new pet', function() {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/pet`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
            }
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.id).to.be.a('number');
            expect(response.body.category.id).equal(0);
            expect(response.body.category.name).equal('string');
            expect(response.body.name).equal('doggie');
            expect(response.body.photoUrls[0]).equal('string');
            expect(response.body.tags[0].id).equal(0);
            expect(response.body.tags[0].name).equal('string');
            expect(response.body.status).equal('available');
            pet.id = response.body.id;
        })
    });

    it(['smoke','regression'], 'PUT status to sold', function() {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiUrl')}/pet/`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: {
                "id": pet.id,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "sold"
            }
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.id).equal(pet.id);
            expect(response.body.category.id).equal(0);
            expect(response.body.category.name).equal('string');
            expect(response.body.name).equal('doggie');
            expect(response.body.photoUrls[0]).equal('string');
            expect(response.body.tags[0].id).equal(0);
            expect(response.body.tags[0].name).equal('string');
            expect(response.body.status).equal('sold');
        })
    });

    it(['smoke','regression'], 'GET pet details', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/pet/${pet.id}`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
        }).then(function(response) {
            expect(response.status).equal(200);
            expect(response.body.id).equal(pet.id);
            expect(response.body.category.id).equal(0);
            expect(response.body.category.name).equal('string');
            expect(response.body.name).equal('doggie');
            expect(response.body.photoUrls[0]).equal('string');
            expect(response.body.tags[0].id).equal(0);
            expect(response.body.tags[0].name).equal('string');
            expect(response.body.status).equal('sold');
        })
    });


    it(['smoke','regression'], 'DELETE pet', function() {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiUrl')}/pet/${pet.id}`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
        }).then(function(response){
            expect(response.status).equal(200);
        })
    });

    it(['smoke','regression'], 'GET pet details are not found', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/pet/${pet.id}`,
            failOnStatusCode: false,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
        }).then(function(response) {
            expect(response.status).equal(404);
            expect(response.body.message).equal('Pet not found');
        })
    });

});