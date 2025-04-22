describe("Login Page", () => {
  it("Login cases", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("#username").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();
    cy.get("#loop-container > div > article > div.post-header > h1").contains(
      "Logged In Successfully"
    );
  });
});
