describe('Landing page to display a table of users', function() {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('Table should have headers', function() {
        cy.get('th').contains('Name');
        cy.get('th').contains('Username');
        cy.get('th').contains('E-Mail');
        cy.get('th').contains('Address');
    })
    it('Table should have data', function() {
        cy.get('td').its('length').should('be.gt', 0);
    })
});