export class Login{
    loginPage(){
        
        cy.get(".input").eq(0).type("rzYEOZ6P");
        cy.get(".input").eq(1).type("OqAd2BKE");
        cy.get(".button").eq(1).click();
    }
}