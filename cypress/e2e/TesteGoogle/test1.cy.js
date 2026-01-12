//() functie anonima
describe('Suita 1', () => {
    //Testul nr.1
    it('functioneaza cu o cautare basic', () => {
        //obiectul cypress care contine toate functiile  deschide o pagina web
        cy.visit('https://google.com');
        // acccepr coockies
        cy.get('#L2AGLb').click();

        
        //get selecteaza un element . pentru clasa si # pentru id
        //type trimite anumite caractere de la tastatura in campul de search
        
        cy.get('.gLFyf').type('vlog de it').type('{enter}');
        //reCAPTCHA blocheaza testul
       // cy.get('.recaptcha-checkbox-border').check();
        //verificam daca primim rezultatul dorit - assertion
       cy.get('.LC20lb MBeuO DKV0Md').should('exist');
    })

})