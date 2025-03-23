describe("Handle child tabs", () => {
  //First approach to open link in same page.
  it("Links open next tab-First", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab
    // cy.xpath("/html/body/div[2]/div/div/a").click();
    cy.get(".example>a").invoke("removeAttr", "target").click(); //remove target attr to open child tab in same window
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new" // open child tab
    );
    cy.wait(5000);
    cy.go("back"); // back to parent tab
  });

  //Second approach to open link in same page.
  it("Links open next tab-Second", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab

    cy.get(".example>a").then((e) => {
      let url = e.prop("href"); //store href attribute to url var
      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new" // open child tab
    );
    cy.wait(5000);
    cy.go("back"); // back to parent tab
  });
});
