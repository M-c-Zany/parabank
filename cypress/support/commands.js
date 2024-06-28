import Chance from 'chance';

const chance = new Chance();

Cypress.Commands.add('generateUserData', () => {
  const userData = {
    firstName: chance.first(),
    lastName: chance.last(),
    address: chance.address(),
    city: chance.city(),
    state: chance.state(),
    zipCode: chance.zip(),
    phone: chance.phone(),
    ssn: chance.ssn({ dashes: false }),
    userName: chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' }),
    password: chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' })
  };

  cy.readFile('cypress/fixtures/userData.json').then((data) => {
    const users = Array.isArray(data) ? data : [];
    users.push({ userName: userData.userName, password: userData.password });
    cy.writeFile('cypress/fixtures/userData.json', users);
  });

  return userData;
});

Cypress.Commands.add('registerUser', (userData) => {
  cy.get('#loginPanel > :nth-child(3) > a').should("have.text", "Register").click();
  cy.get('.title').should("have.text", "Signing up is easy!").and("be.visible");
  cy.wait(2000);
  cy.get(".input").eq(2).type(userData.firstName);
  cy.get(".input").eq(3).type(userData.lastName);
  cy.get(".input").eq(4).type(userData.address);
  cy.get(".input").eq(5).type(userData.city);
  cy.get(".input").eq(6).type(userData.state);
  cy.get(".input").eq(7).type(userData.zipCode);
  cy.get(".input").eq(8).type(userData.phone);
  cy.get(".input").eq(9).type(userData.ssn);
  cy.get(".input").eq(10).type(userData.userName);
  cy.get(".input").eq(11).type(userData.password);
  cy.get(".input").eq(12).type(userData.password);
  cy.get(".button").eq(2).click();
  cy.get('.title').should("have.text", `Welcome ${userData.userName}`);
});
