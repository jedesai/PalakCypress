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
    cy.wait(2000);
    // cy.screenshot('Strike-Login');
    cy.xpath("//ul[@id='navBarWeb']//a[@id='Backtesting']").click();
    cy.get(".back_dropdown_k_wrap").click(); // Open the dropdown
    cy.xpath(
      "//span[@class='k-list-item-text ng-star-inserted'][normalize-space()='ORB']"
    ).click(); // Select ORB structure
    cy.xpath("//a[@class='common_anchor float-end']").click(); //click on procees button
    cy.xpath("//div[@class='k-input-values']").click();
    //cy.xpath("//div[@class='k-input-values']").type("ICICI Bank Ltd (ICICIBANK)").should("be.visible" , "ICICI Bank Ltd (ICICIBANK)").select("ICICI Bank Ltd (ICICIBANK)");

    cy.xpath("//div[@class='k-input-values']").click(); // Click to focus on the dropdown
    cy.contains("ICICI Bank Ltd (ICICIBANK)").click(); // Select the option
    cy.xpath("//input[@id='timepicker-1']").click(); //select time picker - Range strat time
    const timePickerSelector = "#timepicker-1"; //store timepicker id to temp var

    cy.get(timePickerSelector).clear().type("10:0").trigger("change"); //first clear time and add new time , also trigger use to verify.
    cy.xpath("//input[@id='timepicker-2']").click(); //
    const timePickerSelector1 = "#timepicker-2";
    cy.get(timePickerSelector1).clear().type("10:05").trigger("change"); //select time picker - Range End time
    cy.xpath("//input[@id='timepicker-3']").click(); //select time picker - Exit time
    const timePickerSelector3 = "#timepicker-3";
    cy.get(timePickerSelector3).clear().type("15:00").trigger("change");
    cy.xpath("//button[normalize-space()='Run-Backtest']").click();
    cy.wait(9000);
    cy.xpath(
      "//body/app-root/app-layout[@class='ng-star-inserted']/app-orb-structure[@class='ng-star-inserted']/div[@class='orb_page']/div[@id='kt_app_page']/div[@id='kt_app_wrapper']/div[@class='gridContainer']/div[@id='kt_app_main']/div[@class='d-flex flex-column flex-column-fluid']/div[@id='kt_app_content']/div[@id='kt_app_content_container']/div[@class='full_wrap']/div[@id='OrbResult']/app-back-test-result/div[@id='BackTestResultView']/div[1]"
    ).then(($element) => {
      if ($element.length > 0) {
        cy.log("Data found");
      } else {
        cy.log("Data not found");
      }
    });
  });
});
