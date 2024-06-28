import Chance from 'chance';

const chance = new Chance();

const firstName = chance.first();
const lastName = chance.last();
const address = chance.address();
const city = chance.city();
const state = chance.state();
const zipCode = chance.zip();
const phone = chance.phone();
const ssn = chance.ssn({ dashes: false });
const userName = chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });
const password = chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });

const userNameText = userName;

export class register {
  registerPage() {
    cy.readFile('cypress/fixtures/userData.json').then((data) => {
      const users = Array.isArray(data) ? data : [];
      users.push({ userName, password });
      cy.writeFile('cypress/fixtures/userData.json', users);
    });    
    cy.get('#loginPanel > :nth-child(3) > a').should("have.text", "Register").click();
    cy.get('.title').should("have.text", "Signing up is easy!").and("be.visible");
    cy.wait(2000);
    cy.get(".input").eq(2).type(firstName);
    cy.get(".input").eq(3).type(lastName);
    cy.get(".input").eq(4).type(address);
    cy.get(".input").eq(5).type(city);
    cy.get(".input").eq(6).type(state);
    cy.get(".input").eq(7).type(zipCode);
    cy.get(".input").eq(8).type(phone);
    cy.get(".input").eq(9).type(ssn);
    cy.get(".input").eq(10).type(userName);
    cy.get(".input").eq(11).type(password);
    cy.get(".input").eq(12).type(password);
    cy.get(".button").eq(2).click();
    cy.get('.title').should("have.text", `Welcome ${userNameText}`);
  }
}
