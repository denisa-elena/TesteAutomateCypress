import { faker, Faker } from "@faker-js/faker";

describe("Register and Login", () => { 
    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        address1: faker.location.streetAddress(),
        city: faker.location.city(),
        country: 'Romania',
        region: 'Bucuresti',
        zipCode: faker.location.zipCode('#####'),
        loginName: faker.internet.username().toLowerCase(),
        password: faker.internet.password({ length: 10 }),
    };

    it('Register a new user', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/create');
        cy.get('#AccountFrm_firstname').type(userData.firstName);
        cy.get('#AccountFrm_lastname').type(userData.lastName);
        cy.get('#AccountFrm_email').type(userData.email);
        cy.get('#AccountFrm_address_1').type(userData.address1);
        cy.get('#AccountFrm_city').type(userData.city);
        cy.get('#AccountFrm_country_id').select(userData.country);
        cy.get('#AccountFrm_zone_id').select(userData.region);
        cy.get('#AccountFrm_postcode').type(userData.zipCode);
        cy.get('#AccountFrm_loginname').type(userData.loginName);
        cy.get('#AccountFrm_password').type(userData.password);
        cy.get('#AccountFrm_confirm').type(userData.password);
        cy.get('#AccountFrm_agree').check();
        cy.get('button[title="Continue"]').click();
        cy.contains('Your Account Has Been Created!').should('be.visible');
    });


    it('Login with the registered user', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
        cy.get('#loginFrm_loginname').type(userData.loginName);
        cy.get('#loginFrm_password').type(userData.password);
        cy.get('button[title="Login"]').click();
        cy.contains('My Account').should('be.visible');
    });
});
