describe("Login Suits", () => {
  it("Login Cases", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  });
});
