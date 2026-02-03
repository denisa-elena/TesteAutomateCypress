import {calendarDataGet} from '../../data/apiData.js';
import { expect } from "chai"

describe('Calendarific API tests with API key', () => {
    it('Get holiday for a specific country and key, status code 200', () =>{
        cy.request(`https://calendarific.com/api/v2/holidays?&api_key=${calendarDataGet.apiKey}&country=${calendarDataGet.country}&year=${calendarDataGet.year}`)
        .then(response => {
            expect(response.status).to.eq(200);
            //expect(response.body).to.have.property('country', calendarDataGet.country);
        })
    })
    
    it('Status code 401 for missing API key', () =>{
        //failOnStatusCode: false - pentru a nu da eroare in caz ca status code nu e 2xx sau 3xx si a fi passed testul
       cy.request({
        method: 'GET',
        url: `${calendarDataGet.endpoint}?country=${calendarDataGet.country}&year=${calendarDataGet.year}`,
        failOnStatusCode: false
         })
        .then(response =>{
            expect(response.status).to.equal(401);
        
    })
    })

    it('Check the values from country and date fields from the response', () => {
        cy.request(`https://calendarific.com/api/v2/holidays?&api_key=${calendarDataGet.apiKey}&country=${calendarDataGet.id}&year=${calendarDataGet.year}`)
        .then(response => {
            expect(response.status).to.eq(200);
            const holiday = response.body.response.holidays[0];

            //obiectul Cypress.contintul json.obiectul din json care contine holidays
            expect(holiday.country.id).to.eq(calendarDataGet.id);
             expect(holiday.date.iso.startsWith(calendarDataGet.year.toString())).to.be.true;
             expect(holiday.date.datetime.year).to.eq(calendarDataGet.year);
             cy.log(JSON.stringify(response.body.response.holidays[0]));
        })
    })

    it('Check the values from country and date fields from the response', () => {
        cy.request(`https://calendarific.com/api/v2/holidays?&api_key=${calendarDataGet.apiKey}&country=${calendarDataGet.id}&year=${calendarDataGet.year}`)
        .then(response => {
            expect(response.status).to.eq(200);
            const holiday = response.body.response.holidays[0];

            //obiectul Cypress.contintul json.obiectul din json care contine holidays
            expect(holiday.country.id).to.be.a('string');
             expect(holiday.date.iso).to.be.a('string');
             expect(holiday.date.datetime.year).to.be.a('number');
             cy.log(JSON.stringify(response.body.response.holidays[0]));
        })
    })

    //SQL Injection attack => ' OR '1'='1 -- pentru a vedea daca API-ul este vulnerabil la astfel de atacuri
    it('SQL Injection attack', () => {
        const sqlInjectionString = "' OR '1'='1 --";
        
        cy.request({
            method: 'GET',
            url: `${calendarDataGet.endpoint}?&api_key=${calendarDataGet.apiKey}&country=${sqlInjectionString}&year=${calendarDataGet.year}`,
            failOnStatusCode: false
        })
        .then(response => { 
            //de ce nu da 401? tratează country ca string :încearcă să-l valideze ca ISO country code, nu găsește nimic, returnează răspuns valid, dar fără rezultate
            expect(response.status).to.eq(200);
            //holidays nu exista
            expect(response.body.response).to.not.have.property('holidays');

            // Nu returnează date
            expect(response.body.response.holidays).to.be.undefined;
            cy.log(JSON.stringify(response.body.response));
        })
    })



})