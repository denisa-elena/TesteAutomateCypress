class InventoryPage{
    //obiectul in care crream locators sau selectorii
    elements = {
        //locator menu btn care va aavea valorea unei functii anonime unde va fi selectorul
        menuBtn: () => cy.get('#react-burger-menu-btn')

    }

    //metoda
    click(){
        this.elements.menuBtn().click;
    }

}

export default InventoryPage;