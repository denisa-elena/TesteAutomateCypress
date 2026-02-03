//import e = require("express")
import 'cypress-real-events/support';

class CartPage{
    elements = {
        product: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        cart: () => cy.get('[data-test="shopping-cart-link"]'),
        checkCart: () => cy.get('#checkout'),
        formUser: () => cy.get('[data-test="firstName"]'),
        formLast: () => cy.get('[data-test="lastName"]'),
        formZip: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        finishBtn: () => cy.get('[data-test="finish"]')
    }

    addToCart(){
        this.elements.product().click()
    }
    goToCart(){
        this.elements.cart().click()
    }

    checkout(){
        this.elements.checkCart().click()
    }

fillForm(first, last, zip) {
    this.elements.formUser().clear().type(first, { force: true })
    this.elements.formLast().clear().type(last, { force: true })
    this.elements.formZip().clear().type(zip, { force: true })
}



    continue(){
        this.elements.continueBtn().click()
    }

    finish(){
        this.elements.finishBtn().realClick()
    }  

}
export default CartPage;