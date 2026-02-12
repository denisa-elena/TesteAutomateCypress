import InventoryPage from "../pages/inventoryPage";
import LoginPage from "../pages/loginPage";
import CartPage from "../pages/cartPage";
//import { describe } from "mocha";

describe('Cart Tests', () => {
    const inventoryPage = new InventoryPage();
    const loginPage = new LoginPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.login(); 
    });

    it('Add product to cart an buy it', () => {
        cartPage.addToCart();
        cartPage.goToCart();
        cartPage.checkout();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        cartPage.fillForm("Denisa", "Baiceanu", "12345");
        cartPage.continue();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');
        cartPage.finish();
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
    })
})