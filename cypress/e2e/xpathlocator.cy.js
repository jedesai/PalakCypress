describe("XpathLocators", () => {
  it("xpath", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.xpath("//div[@id='tbodyid']/div").should("have.length", 9);
  });

  it("xpath", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.xpath("//div[@id='tbodyid']").xpath("./div").should("have.length", 9);
  });
});
