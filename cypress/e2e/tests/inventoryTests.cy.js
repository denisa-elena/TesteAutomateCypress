import InventoryPage from "../pages/inventoryPage";
import LoginPage from "../pages/loginPage";

describe('Inventory', () => {
        //variabila este un obiect ce va contine selectorii si metodele din clasa inventoryPage
    const inventoryPage = new InventoryPage();
    const loginPage = new LoginPage();
    // beforeEach(() => {
    //     cy.session('login-session', () => {
    //         cy.loginUI(); // apel sigur acum
    //     });
    // });

    //varianta cu proxy
    //     beforeEach(() => {
    //     // Nu mai folosim loginUI, navigăm direct prin proxy
    //     cy.visit('http://localhost:3000/inventory.html');
    // });

    it('Check button menu', () => {
        loginPage.login();
        inventoryPage.openMenu();
        cy.get('.bm-menu-wrap').should('be.visible');
;
       inventoryPage.closeMenu();
        cy.get('.bm-menu-wrap').should('not.be.visible');

    })

   // it('abc', )
} )