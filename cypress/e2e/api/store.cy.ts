import  { MethodType, OrderInputType } from '../../fixtures/schema';
const order:any = global;
describe('Store API tests', function() {
    let input: OrderInputType;
    before('Get test data', function(){
        cy.fixture('store').then(function(data){
            this.data = data;
            input = this.data.input;
        });
    });

    it(['smoke','regression'], 'POST a new order', function() {
        cy.request({
            method: MethodType.POST,
            url: `${Cypress.env('apiUrl')}/store/order`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
            body: input
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
            method: MethodType.GET,
            url: `${Cypress.env('apiUrl')}/store/inventory`,
            headers: {
                'x-api-key': Cypress.env('apiKey')
            },
        }).then(function(response){
            expect(response.status).equal(200);
            cy.log(response.body);
            expect(response.body.available).to.be.a('number');
        })
    });
});