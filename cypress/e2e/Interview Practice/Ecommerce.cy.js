describe("Ecommerce scenario", () => {
  it("Ecommerce website cases", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Home").should("be.visible");
    cy.get("a[href='/products']").click();
    cy.get(
      "body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a"
    ).click();
    cy.contains("View Cart").click();
    cy.url().should("include", "/view_cart");
    cy.get("a[href='/product_details/1']").should("contain.text", "Blue Top");
    cy.xpath("//button[normalize-space()='1']").should("contain.text", "1");
  });
});
