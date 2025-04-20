import "cypress-iframe";
require("@4tw/cypress-drag-drop");

describe("Mouse Operations", () => {
  it("MouseHover", () => {
    cy.visit("https://the-internet.herokuapp.com/hovers");
    cy.get("#content > div > div:nth-child(3) > img")
      .trigger("mouseover")
      .click();
    cy.xpath("/html/body/div[2]/div/div/div[1]/div/h5").should("be.visible");
    // cy.get(":nth-child(3) > img").trigger("mouseover").click();
  });
  it("RightClick", () => {
    //Approach 1
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.xpath("//span[@class='context-menu-one btn btn-neutral']").trigger(
      "contextmenu"
    );
    cy.xpath("//span[normalize-space()='Copy']").should("be.visible");
  });
  it("DoublelClick", () => {
    cy.visit(
      "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick"
    );
    cy.frameLoaded("#iframeResult");
    cy.iframe("#iframeResult")
      .find("p[ondblclick='myFunction()']")
      .trigger("dblclick");
    cy.iframe("#iframeResult").find("#demo").should("be.visible");
  });
  it(" Drag and Drop using plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.wait(4000);
    cy.get("#column-a").drag("#column-b", { force: true });
  });
  it.only("Scrolling Page", () => {
    cy.visit("https://the-internet.herokuapp.com/infinite_scroll");
    cy.xpath(
      '//*[@id="content"]/div/div/div/div/div[10]/text()'
    ).scrollIntoView({ duration: 3000 });
    cy.wait(7000);
  });
});
