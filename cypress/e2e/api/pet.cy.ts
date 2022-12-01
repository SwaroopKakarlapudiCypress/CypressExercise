import  { MethodType, PetInputType } from '../../fixtures/schema';
const pet:any = global;
describe('Pet API tests', function() {
    let input: PetInputType;
    let updateInput: PetInputType;
    before('Get test data', function() {
        cy.fixture('pet').then(function(data) {
            this.data = data;
            input = this.data.input;
            updateInput = this.data.updateInput;
        })
    });

    it(['smoke','regression'], 'POST a new pet', function() {
        cy.request({
            method: MethodType.POST,
            url: `${Cypress.env('apiUrl')}/pet`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: input
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
            method: MethodType.PUT,
            url: `${Cypress.env('apiUrl')}/pet/`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: Object.assign(updateInput,{"id": pet.id})
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
            method: MethodType.GET,
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
            method: MethodType.DELETE,
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
            method: MethodType.GET,
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