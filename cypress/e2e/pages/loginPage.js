class LoginPage{
elements = {
    //daca avem doar o linie de cod, putem sterge {} din functia anonima
    username: () => cy.get('#user-name'),
    password: () => cy.get('#password'),
    wrongPassword: () => cy.get('#password'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    //url: () => cy.url
    
}
//creeam o metoda login ce poate fi apelata de fiecare data cand avem nevoie de logare
// login(){
//     cy.visit('https://www.saucedemo.com/');
//     //din aceasta clasa this vom luam elementeles user, pass la caer vom face type cu credentialele
//     this.elements.username().type('error_user');
//     this.elements.password().type('secret_sauce');
//     this.elements.loginButton().click();
//     //this.elements.url().should('include', 'inventory.html');
// }

failedLogin() {
    cy.visit('https://www.saucedemo.com/');
    //din aceasta clasa this vom luam elementeles user, pass la caer vom face type cu credentialele
    this.elements.username().type('error_user');
    this.elements.wrongPassword().type('abc'),
    this.elements.loginButton().click();
}
}
//export la clasa pentru o putea folosi in testele noastre , default pentru ca e doar o clasa
export default LoginPage;