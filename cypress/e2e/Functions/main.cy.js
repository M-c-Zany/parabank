/// <reference types="Cypress" />

import { register } from "./01_Register.cy";
import { Login } from "./02_Login.cy";
import { Hamburger } from "./03.Hamburger.cy";

describe("test suite for parabank website", () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit(baseUrl);
    cy.wait(2000);
  });
  const RP = new register();
  const LP = new Login();
  const SL = new Hamburger;
  const baseUrl = Cypress.env("url");
  it("Register page", () => {
    RP.registerPage();
  });
  
  it("Login page",()=>{
    LP.loginPage();
  })

  it.only("Hamburger test",()=>{
    SL.Solution();
    SL.About_Us();
    SL.Services();
  })
});
