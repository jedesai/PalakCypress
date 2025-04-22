describe("Jplus login and redirections", () => {
  it("Login with valid credentials", () => {
    cy.visit("https://uatjplus.jainam.in/");
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/div/form/div[1]/kendo-textbox/input"
    ).type("1512"); // Enter user id
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/div/form/button[1]"
    ).click(); // click on continue
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/h3/text()"
    ).should("have.text", " Continue to Login"); // verify text
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/div/div/div/kendo-textbox/input"
    ).type("Jainam@1234"); // Enter password
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/form/div/button"
    ).click(); // click on continue
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/app-username-pin-verification/div/div[2]/form/div/input[1]"
    ).type("1");
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/app-username-pin-verification/div/div[2]/form/div/input[2]"
    ).type("2");
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/app-username-pin-verification/div/div[2]/form/div/input[3]"
    ).type("3");
    cy.xpath(
      "/html/body/app-root/app-sign-in/div/div/div[2]/app-sign-in-with-username/app-username-pin-verification/div/div[2]/form/div/input[4]"
    ).type("4");
    cy.wait(2000);

    // cy.xpath("/html/body/app-root/app-layout/app-partner-header-navbar/div[1]/div/nav/div[2]/ul/li[4]/a/span/img[1]").trigger('mouseover');
    // cy.xpath("/html/body/app-root/app-layout/app-partner-header-navbar/div[1]/div/nav/div[2]/ul/li[4]/div/div/div[1]/span[2]").click()
    cy.xpath(
      "/html/body/app-root/app-layout/app-dashboard/div/div/div[2]/div[1]/div/app-invest-with-us/div/a[1]"
    )
      .invoke("removeAttr", "target")
      .click();
  });
});
