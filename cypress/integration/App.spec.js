describe("Calculator", () => {
    // for e2e testing we need our app runnig unlike unit testing where we dont need our app running while testing
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });
    //Do the number buttons update the display of the running total?
    it("should have working number buttons", () => {
        cy.get("#number2").click();
        cy.get(".display").should("contain", "2");
        cy.get("#operator_add").click();
        cy.get("#number3").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "5");
    });

    //Do the arithmetical operations update the display with the result of the operation?
    it("should have working arithmetical operations ", () => {
        cy.get("#number2").click();
        cy.get(".display").should("contain", "2");
        cy.get("#operator_add").click();
        cy.get("#number3").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "5");
    });
    //Can multiple operations be chained together?
    it("should have working multiple operations", () => {
        cy.get("#number2").click();
        cy.get(".display").should("contain", "2");
        cy.get("#operator_multiply").click();
        cy.get("#number3").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "6");
    });
    //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
    it("should have working for range of numbers", () => {
        cy.get("#number2").click();
        cy.get(".display").should("contain", "2");
        cy.get("#operator_add").click();
        cy.get("#number3").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "5");
        cy.get("#operator_add").click();
        cy.get("#number3").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "8");
        cy.get("#operator_subtract").click();
        cy.get("#number9").click();
        cy.get("#hidden").click(); // . Operator
        cy.get("#number5").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "-1.5");
        cy.get("#operator_multiply").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#number2").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "-333333333");



    });
    //What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
    it("should have working in exceptional circumstances", () => {
        cy.get("#number2").click();
        cy.get("#operator_divide").click();
        cy.get("#number0").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "Not valid operation");
    });
});
