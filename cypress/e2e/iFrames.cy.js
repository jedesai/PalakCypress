import "cypress-iframe";

describe("Iframe suits", () => {
  it("Iframe cases", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.xpath("/html/body/div[4]/div/div/button/div").click();

    // const iframe = cy
    //   .get("#mce_0_ifr")
    //   .its("0.contentDocument.body")
    //   .should("be.visible")
    //   .then(cy.wrap);

    // iframe.clear().type("Welcome");

    cy.get("iframe#mce_0_ifr").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body)
        .find('[contenteditable="true"]')
        .click()
        .type("{selectall}{backspace}");
    });
  });

  //Use below test in Edge browser, Not working in chrome
  it.only("Iframe plugin approach", () => {
    cy.visit("https://www.tiny.cloud/docs/tinymce/6/");
    cy.get(".ch2-allow-all-btn").click();
    cy.wait(4000);

    cy.frameLoaded("#default-editor_ifr");
    cy.iframe("#default-editor_ifr").clear().type("welcome {selectall}");
    cy.xpath(
      '//*[@id="live-demo_pane_run_default-editor"]/div[1]/div[1]/div[1]/div[2]/div/div[3]/button[1]'
    ).click();
  });

  //First approach
  it("Handling frames", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.xpath("/html/body/div[4]/div/div/button/div").click();

    // Wait for the iframe element to become visible
    cy.get("#mce_0_ifr")
      .should("be.visible")
      .then(($iframe) => {
        // Wait for 1 second to ensure the iframe content has loaded
        cy.wait(1000);

        // Access the body element within the iframe
        const body = $iframe.contents().find("body");

        // Ensure that the body is visible before proceeding
        cy.wrap(body)
          .should("be.visible")
          .then(($body) => {
            // Set contenteditable to true to allow editing
            $body.attr("contenteditable", "true");

            // Add a short wait after changing the attribute
            cy.wait(500);

            // Clear any existing text in the <p> element within the iframe and enter new text
            cy.wrap($body).find("p").clear().type("Hello World!!!");

            // Select all text in the <p> element
            cy.wrap($body).find("p").type("{selectall}");

            // Click the 'Bold' button to apply bold formatting
            cy.xpath(
              '//*[@id="content"]/div/div/div[1]/div[1]/div[2]/div/div[3]/button[1]'
            ).click();
          });
      });
  });
});
