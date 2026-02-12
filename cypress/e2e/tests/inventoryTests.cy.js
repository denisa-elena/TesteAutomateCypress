import InventoryPage from "../pages/inventoryPage";
import LoginPage from "../pages/loginPage";

describe('Inventory', () => {
    //variabila este un obiect ce va contine selectorii si metodele din clasa inventoryPage
    const inventoryPage = new InventoryPage();
    const loginPage = new LoginPage();


    beforeEach(() => {
        cy.login(); 
    });

    it('Check button menu', () => {
        inventoryPage.openMenu();
        cy.get('.bm-menu-wrap').should('be.visible');
;
       inventoryPage.closeMenu();
        cy.get('.bm-menu-wrap').should('not.be.visible');

    })
} )