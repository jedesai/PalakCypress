describe("Ecommerce scenario", () => {
  it("Ecommerce website cases", () => {
    // Given
    Given("I am on the automation exercise website", () => {
      cy.visit("https://automationexercise.com");
      cy.contains("Home").should("be.visible");
    });

    // When
    When("I navigate to the products page", () => {
      cy.get("a[href='/products']").click();
    });

    When("I select a product", () => {
      cy.get(
        "body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.single-products > div.productinfo.text-center > a"
      ).click();
    });

    When("I view the cart", () => {
      cy.contains("View Cart").click();
    });

    // Then
    Then("I should be on the cart page", () => {
      cy.url().should("include", "/view_cart");
    });

    Then("I should see the selected product in my cart", () => {
      cy.get("a[href='/product_details/1']").should("contain.text", "Blue Top");
      cy.xpath("//button[normalize-space()='1']").should("contain.text", "1");
    });
  });

  it("Login to Ecommerce website", () => {
    // Given
    Given("I am on the automation exercise website", () => {
      cy.visit("https://automationexercise.com");
      cy.contains("Home").should("be.visible");
    });

    // When
    When("I click on the login button", () => {
      cy.contains("Signup / Login").click();
    });

    When("I enter valid credentials", () => {
      cy.get('input[data-qa="login-email"]').type("test@example.com");
      cy.get('input[data-qa="login-password"]').type("password123");
    });

    When("I submit the login form", () => {
      cy.get('button[data-qa="login-button"]').click();
    });

    // Then
    Then("I should be successfully logged in", () => {
      cy.contains("Logged in as").should("be.visible");
      cy.contains("test@example.com").should("be.visible");
    });

    Then("I should see my account information", () => {
      cy.contains("Delete Account").should("be.visible");
      cy.contains("Logout").should("be.visible");
    });
  });
});
