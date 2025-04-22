describe("StrikeLoginSuit", () => {
  it("LoginCases", () => {
    // Visit Link
    cy.visit("https://strike.jainam.in/");

    // Close IOC box
    cy.get(".close.closebtn.ng-tns-c2116370541-1.ng-star-inserted").click();

    //Go to login link
    cy.get(".nav-link").click();
    //Enter mobile number
    cy.xpath("//div[@class='input_wrap']").type("9904403246");
    //click on login page
    cy.get(
      ".btn_bg_wb.btn_bg_bw.margin_bottom_20.fs-4.ng-star-inserted"
    ).click();
    //Enter password
    cy.get(".input_label_wrap.margin_bottom_20.ng-star-inserted").type(
      "Palak@123"
    );
    //Click on login
    cy.get(
      ".btn_bg_wb.btn_bg_bw.margin_bottom_20.fs-4.ng-star-inserted"
    ).click();
    cy.wait(4000);
    // cy.screenshot('Strike-Login');
    cy.xpath("//ul[@id='navBarWeb']//a[@id='Backtesting']").click();
    cy.get(".back_dropdown_k_wrap").click(); // Open the dropdown
    cy.xpath(
      "/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[3]/span[1]"
    ).click(); // Select "option" type

    cy.xpath("//a[@class='common_anchor float-end']").click(); // CLick on proceed option
    cy.xpath("//a[@id='a_AddNewLeg']").click(); //Add 1 Leg
    cy.xpath(
      "//button[@class='common_anchor secondary small border-0']"
    ).click(); // click on runbacktest button
    cy.wait(9000);
    // cy.get(".loader_numb", { timeout: 3000 }).then($loader => {
    //     if ($loader.is(':visible')) {
    //       // If the loader is visible, do something here
    //       cy.log('Loader is visible, waiting for it to disappear...');
    //     } else {
    //       // If the loader is not visible, proceed with checking the full report
    //       cy.xpath("//span[normalize-space()='Full Report']").should('be.visible').then(() => {
    //         cy.log('Backtest data successfully listed');
    //       });
    //     }
    //   });

    cy.xpath(
      "//body/app-root/app-layout[@class='ng-star-inserted']/app-option-structure[@class='ng-star-inserted']/div[@id='kt_app_page']/div[@id='kt_app_wrapper']/div[@class='gridContainer']/div[@id='kt_app_main']/div[@class='d-flex flex-column flex-column-fluid']/div[@id='kt_app_content']/div[@id='kt_app_content_container']/div[@class='full_wrap']/div[@class='full_wrap']/div[@id='OptionBackTestResult']/app-back-test-result/div[@id='BackTestResultView']/div[1]"
    ).then(($element) => {
      //Full report xpath
      if ($element.length > 0) {
        //if data is greater than 0 in 9 sec then list display
        cy.log("Data found");
      } else {
        cy.log("Data not found");
      }
    });
  });
});
