const order:any = global;
describe('Store API tests', function() {

    it(['smoke','regression'], 'POST a new order', function() {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/store/order`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: {
                "id": 0,
                "petId": 0,
                "quantity": 0,
                "status": "placed",
                "complete": true
              }
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.complete).to.be.true;
            expect(response.body.id).to.be.a('number');
            expect(response.body.petId).equal(0);
            expect(response.body.quantity).equal(0);
            expect(response.body.status).equal('placed');
            order.id = response.body.id;
        })
    });

    it(['smoke','regression'], 'GET store inventory', function() {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}/store/inventory`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body.available).to.be.a('number');
            expect(response.body.sold).to.be.a('number');
            expect(response.body.pending).to.be.a('number');
        })
    });
});