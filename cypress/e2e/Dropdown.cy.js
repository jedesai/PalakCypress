describe("Handle Dropdowns", () => {
  it("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("India")
      .should("have.value", "India");
  });
  //Skip testcase
  //   it.skip("Skipcase", () => {});

  it("Dropdown without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click(); //click dropdown
    cy.get(".select2-search__field").type("Italy").type("{enter}"); //Type and enter selection
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });
});
