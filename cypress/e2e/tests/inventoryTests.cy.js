import InventoryPage from "../pages/inventoryPage";
import LoginPage from "../pages/loginPage";

describe('Inventory', () => {
    //variabila este un obiect ce va contine selectorii si metodele din clasa inventoryPage
    const inventoryPage = new InventoryPage();
    const loginPage = new LoginPage();

    it('Check button menu', () => {
        loginPage.login();
        inventoryPage.clickOnBtn();
        cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
        // inventoryPage.click();
        // cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'false')

    })
} )