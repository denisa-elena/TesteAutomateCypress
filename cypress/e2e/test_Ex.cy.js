describe('Exemplu unde', () => {
//Verificare URL
    // it('verific daca un URL contine ceva', () => {
    //     cy.visit('https://www.digi24.ro/stiri/economie');
    //     cy.url().should('include', '/stiri/'); //verifica un segment
    // })

//Testul cu delay
    // it('asteapta 10 sec', () => {
    //     cy.visit('https://google.com');
    //     cy.get('#L2AGLb').click();

    //     cy.wait(1000); //asteapta 10 secunde
    //     cy.get('.gLFyf').type('au trecut 10 secunde');

    // })



//Testul cu selector de timp atribut
// it('selectez folosind un atribut', () => {
//     cy.visit('https://google.com');

//     cy.get('#L2AGLb').click();

//     cy.get('[aria-label="Google"]').should('exist'); //selector atribut alt + assertion cu visible

// })


//Testul cu screenshot

    // it('testul cu screenshot', () => {
    //     cy.visit('https://google.com');
    //     cy.screenshot(); //Face screenshot intr-un folder
    // })


//Testul constanta si verificare input
// it('verific o valoare de input', () => {
//     cy.visit('https://google.com');
//     cy.get('#L2AGLb').click();

//     //constanta care poate fi folosita in mai multe locuri
//     const googleSearch = cy.get('.gLFyf');

//     googleSearch.type('123');
//     googleSearch.should('have.value', '123'); //Assertion contine textul
// })


//Testul verifica existenta unei clase pe un element select (verificam si daca exista anumite atribute)
    it('verific o valoare de input', () => {
        cy.visit('https://www.libris.ro/');

        cy.get('#autoCompleteButton').should('have.class', 'onSearchClick');
    })

})