export class Hamburger{
    Solution(){

    }
    About_Us(){
        cy.get(".leftmenu").contains("About Us").click();
        cy.get(".title").should("have.text","ParaSoft Demo Website").and("be.visible");
    }
    Services(){
        cy.get(".leftmenu").contains("Services").click();
        cy.get(".heading").should("contain","Available Bookstore SOAP services:");
    }
    Products(){

    }
    Locations(){

    }
    Admin_Page(){

    }
}