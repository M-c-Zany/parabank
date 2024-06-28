/// <reference types="Cypress" />

import { register } from "./01_Register.cy";
import { Login } from "./02_Login.cy";

describe("test suite for parabank website", () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit(url);
    cy.wait(2000);
  });
  const RP = new register();
  const LP = new Login();
  const url = "https://parabank.parasoft.com/parabank/index.htm";
  it("Register page", () => {
    RP.registerPage();
  });
  
  it.only("Login page",()=>{
    LP.loginPage();
  })
});
