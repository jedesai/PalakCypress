describe("Alerts", () => {
  //Javascript alert , it will have some text and ok button
  it("Js Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.xpath("/html/body/div[2]/div/div/ul/li[1]/button").click();

    cy.on("window:alert", (p) => {
      expect(p).to.contains("I am a JS Alert"); // to verify text on alert window
    });

    //alert window automatically closed by cypress
    cy.xpath("//p[@id='result']").should(
      "have.text",
      "You successfully clicked an alert"
    );
  });

  //Javascript confirm alert : it will have some text with ok and cancel button.
  it("Javascript confirm - okay", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.xpath("/html/body/div[2]/div/div/ul/li[2]/button").click();
    cy.on("window:confirm", (k) => {
      expect(k).to.contains("I am a JS Confirm"); // to verify text on alert window
    });

    //cypress will automatically close alret window by using ok button default.
    cy.xpath("/html/body/div[2]/div/div/p[2]").should(
      "have.text",
      "You clicked: Ok"
    );
  });

  it("Javascript confirm - cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.xpath("/html/body/div[2]/div/div/ul/li[2]/button").click();
    cy.on("window:confirm", (k) => {
      expect(k).to.contains("I am a JS Confirm"); // to verify text on alert window
    });

    //Close window by cancel button.
    cy.on("window:confirm", () => false);
    cy.xpath("/html/body/div[2]/div/div/p[2]").should(
      "have.text",
      "You clicked: Cancel"
    );
  });

  //Javascript prompt alert , it will have some text with input box along with ok button and cancel button.

  it("Javascript prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome");
    });
    cy.xpath("/html/body/div[2]/div/div/ul/li[3]/button").click(); //click on the javascript confirm button
    cy.on("window:confirm", (p) => {
      expect(p).to.contains("I am a JS prompt"); // to verify text on alert window
    });
    cy.xpath("/html/body/div[2]/div/div/p[2]").should(
      "have.text",
      "You entered: Welcome" //Verify confirmation msg
    );
  });

  //Authencation alert , First approach
  it("Authenticated first approach alert", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });

    // cy.wait(4000);
    cy.xpath("/html/body/div[2]/div/div/p").should(
      "have.contain",
      "Congratulations!"
    );
  });

  //Authencation alert , Second approach
  it("Authenticated alert second approach", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });

    // cy.wait(4000);
    cy.xpath("/html/body/div[2]/div/div/p").should(
      "have.contain",
      "Congratulations!"
    );
  });
});
