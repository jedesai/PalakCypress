describe(" Explicit Assertions", () => {
  it("Explicit ass1", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let ExpName = "Barry Allen";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let ActName = x.text();

      //BDD style
      expect(ActName).to.equal(ExpName);
      expect(ActName).to.not.equal(ExpName);

      //TDD Style

      assert.equal(ActName, ExpName);
      assert.notEqual(ActName, ExpName);
    });
  });
});
