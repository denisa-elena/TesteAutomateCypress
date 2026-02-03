import { expect } from "chai"
import { apiData } from "../../data/apiData";

describe('My first API suite', () => {
    it('My first API test', () => {
        //`` folosim aceste ghilimele pentru a putea accesa variabilele din apiData
        cy.request(`https://www.omdbapi.com/?apikey=${apiData.apiKey}&t=${apiData.movieTitle}`)
        //
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('Title', apiData.movieTitle);
            expect(response.body.Title).to.be.a('string');
        })
    });
} )