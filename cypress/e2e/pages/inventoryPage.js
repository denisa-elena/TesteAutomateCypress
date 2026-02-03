class InventoryPage{
    //obiectul in care crream locators sau selectorii
    elements = {
        //locator menu btn care va aavea valorea unei functii anonime unde va fi selectorul
        menuBtn: () => cy.get('#react-burger-menu-btn'),
        closeMenuBtn: () => cy.get('#react-burger-cross-btn')


    }

    //metode
    openMenu(){
        this.elements.menuBtn().click()

    }

    closeMenu(){
    this.elements.closeMenuBtn().click()
    }

}

export default InventoryPage;