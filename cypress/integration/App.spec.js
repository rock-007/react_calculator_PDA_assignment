describe("Calculator", () => {
    // for e2e testing we need our app runnig unlike unit testing where we dont need our app running while testing
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should have working number buttons", () => {
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
        cy.get("#operator_divide").click();
        cy.get("#number0").click();
        cy.get("#operator_equals").click();
        cy.get(".display").should("contain", "Not valid operation");
    });
});
