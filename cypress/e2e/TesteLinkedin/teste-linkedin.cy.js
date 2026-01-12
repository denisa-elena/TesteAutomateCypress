//2 parametri dprimul de tip string numele suitei, al doilea o functie anonima
describe('On LinkedIn', () => {
    //orice test porneste de la functia it
    it('Error Login', () => {
    cy.visit('https://www.linkedin.com/');
    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('radu@radu.ro');
    cy.get('#password').type('adbsj234');
    cy.get('.btn__primary--large').click();
    cy.get('#error-for-password').should('exist');
    })
});
