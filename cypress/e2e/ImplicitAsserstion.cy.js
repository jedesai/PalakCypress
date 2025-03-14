describe("Assertions", () => {
  it("implicit ass1", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // implicit asserstion
    cy.url().should("include", "opensource-demo"); //To indetify partial text , works on javascript object/string/array
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ); //Match exact text
    cy.url().should("contain", "orangehrmlive"); // works on dom element
  });

  it("implicit ass2", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // implicit asserstion
    cy.url()
      .should("include", "opensource-demo")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("contain", "orangehrmlive");
  });

  it("implicit ass3", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // implicit asserstion
    cy.url()
      .should("include", "opensource-demo")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrmlive")
      .and("not.contain", "grrenhRM");
  });
  it("implicit ass4 Title", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // implicit asserstion
    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist"); //to find logo
  });
  it("implicit ass5 linksCount", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.xpath("//a").should("have.length", "5"); //to find how many links
  });

  it("implicit checkvalue", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin"); //type username
    cy.get("input[placeholder='Username']").should("have.value", "Admin"); //verfit input value
  });
});
