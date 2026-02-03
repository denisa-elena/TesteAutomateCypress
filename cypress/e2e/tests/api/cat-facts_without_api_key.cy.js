//import { describe } from "mocha";
import { catData } from "../../data/apiData";
import { expect } from "chai"

describe('Cat Facts API tests without API key', () => {
 it('Get single cat fact, status code 200', () => {
        cy.request(`${catData.baseUrl}/fact`)
          .then(response => {
              expect(response.status).to.eq(200);
              expect(response.body).to.have.property('fact');
              expect(response.body).to.have.property('length');
              cy.log(JSON.stringify(response.body));
          });
    });

  it ('Status code 404(page not found)', () => {
    cy.request({
      url: `${catData.baseUrl}/x/fact`,
      failOnStatusCode: false
    })
      .then(response => {
        expect(response.status).to.eq(404);
      });
  });   

  it('Check the values from response and their data types', () => {
    cy.request(`${catData.baseUrl}/fact`)
      .then(response => {
          expect(response.status).to.eq(200);
          expect(response.body.fact).to.not.be.empty;
          expect(response.body.fact).to.be.a('string');
          //valoarea calculată de server (length) este egală cu lungimea textului (fact) calculată de client (JavaScript)
          expect(response.body.length).to.eq(response.body.fact.length);
          expect(response.body.length).to.be.a('number');
          cy.log(JSON.stringify(response.body));
      });
    });

    it('SQL Injection attack', () => {
      const sqlInjectionString = "' OR '1'='1 --"; 
      cy.request({
        url: `${catData.baseUrl}/fact?search=${sqlInjectionString}`,
        failOnStatusCode: false})
      .then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.response).to.be.undefined;
        cy.log(JSON.stringify(response.body));
})
    });
})
