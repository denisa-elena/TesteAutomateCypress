describe('tema1', () => {
    it('Incorrect login', () => {
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('abc');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service');
    } )

    it('Correct login', () => {
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
    } )


    it('Logout', () => {
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html')
        //logout and assertion
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.get('#login_button_container').should('exist');
    } )

    it('Check button menu', () => {
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html')
        //button menu is open and assertion
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'false');
        //button menu is closed and assertion
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
        

    })

    it('Add product to cart and remove it', () =>{
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html')
        //add product to cart and check
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist');
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');
        //remove the product from card
 //???????? uncaught exception
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '0');

    })

    it('Buy a product', () =>{
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html')
        //add product to card and double assertions
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist');
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');
        //go to cart
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="title"]').should('contain', 'Your Cart');
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');
        //checkout
        cy.get('#checkout').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information');
        //form
//???????? uncaught exception    
        cy.get('[data-test="firstName"]').type('Denisa');
        cy.get('[data-test="lastName"]').type('Baiceanu');
        cy.get('[data-test="postalCode"]').type('343542');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview');
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack');
        cy.get('#finish').click();
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');


    })

    it('Product s details and back to products button', () => {
        //open URL
        cy.visit('https://www.saucedemo.com/');
        //login and assertion
        cy.get('#user-name').type('error_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', 'inventory.html');
        //page with the details and assertion 
        cy.get('#item_4_title_link').click();
        cy.url().should('include', 'id=4');
        //back to product button and assertion
        cy.get('[data-test="back-to-products"]').click();
        cy.url().should('include', 'inventory.html');


    })

})