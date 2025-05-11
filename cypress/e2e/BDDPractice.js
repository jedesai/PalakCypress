import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given("Visit a website", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});
When("Enter valid Usernam and Password", () => {
  cy.get("#username").type("student");
  cy.get("#password").type("Password123");
  cy.get("#submit").click();
});
Then("Successfully Logged in", () => {
  cy.get(".post-title").should("have.text", "Logged In Successfully");
});
