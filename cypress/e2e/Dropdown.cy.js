describe("Handle Dropdowns", () => {
  it.skip("Dropdown with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("India")
      .should("have.value", "India");
  });
  //Skip testcase
  //   it.skip("Skipcase", () => {});

  it.skip("Dropdown without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click(); //click dropdown
    cy.get(".select2-search__field").type("Italy").type("{enter}"); //Type and enter selection
    cy.get("#select2-billing_country-container").should("have.text", "Italy");
  });
  it.skip("dropdown with static auto suggestion", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Mumbai");
    cy.get(".suggestion-text").contains("Mumbai Metro").click();
  });

  it("dropdown with dynamic auto suggestion", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("cypress automation");
    cy.wait(4000); //to wait 4 sec
    cy.get("div.wM6W7d>span").should("have.length", 13); //count auto suggestion
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      // $el- particular element , $list = contain total elements(Auto suggestion count)
      if ($el.text() == "cypress automation jobs") {
        cy.wrap($el).click(); // Click when text found
      }
    });
    cy.get("div.wM6W7d>span").should("have.value", "cypress automation jobs");
  });
});
