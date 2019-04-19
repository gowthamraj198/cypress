var userActions = require("../pageObjects/sample_page");
var basePage = require("../pageObjects/base_page");


describe("Go to careers page", function(){
    it("careers page test", function(){
        cy.visit("https://thoughtworks.com/");
        // cy.get(userActions.search).type("name");
        cy.get(userActions.careers).click();
    });

});