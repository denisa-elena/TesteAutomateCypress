import LoginPage from "../pages/loginPage";

describe('POM', () => {
    //un nou obiect ce va fi a newe login page dupa claasa (template)
    //loginPage obiectul diferit ca denumire de  clasa LoginPage
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.login(); 
    });

    it('Failed Login', () => {
        loginPage.failedLogin();
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service');
    })

    it('Login', () => {
        //apelam metoda login din clasa loginPage cu ajutorul obiectului noi loginPage
        //loginPage.login();
        //assertion
        //loginPage.elements.url.should('include', 'inventory.html');
        cy.url().should('include', 'inventory.html');

    })

    

})