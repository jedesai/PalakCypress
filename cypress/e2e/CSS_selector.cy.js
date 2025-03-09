describe("Locator Suit", () => {
  it("locator", () => {
    cy.visit("https://practice.expandtesting.com/#google_vignette");
    cy.get("#search-input").type("test login page"); // Css locator using ID(#)
    cy.get("#search-button").click();
    cy.get("a.my-link").contains("Test Login Page"); //Asserstion
  });
});
