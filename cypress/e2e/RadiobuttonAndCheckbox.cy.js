describe("RadiobtnAndCheckBoxSuit", () => {
  it("Radiobtn", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //Check visibility
    cy.get("input#male").should("be.visible");
    cy.get("input#female").should("be.visible");

    //Check male selection
    cy.get("input#male").check().should("be.checked");
    cy.get("input#female").should("not.be.checked");

    //Check female selection
    cy.get("input#female").check().should("be.checked");
    cy.get("input#male").should("not.be.checked");
  });

  it("SingleCheckbox", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //Check visibility for checkbox
    cy.get("input#sunday").should("be.visible");

    //checking selection of checkbox--Single selection
    cy.get("input#sunday").check().should("be.checked");

    //Checking unselection of single selection
    cy.get("input#sunday").uncheck().should("not.be.checked");
  });

  it("SelectAllCheckbox", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //Check all selecion for checkbox
    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");

    //Uncheck all selection for checkbox
    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked");

    //Select first & Last checkbox
    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");

    //select particular checkbox using eq(index)--index start with 0.
    cy.get("input.form-check-input[type='checkbox']")
      .eq(1)
      .check()
      .should("be.checked");
  });
});
