describe("Tables", () => {
  it("Check number of row and column", () => {
    cy.visit("https://datatables.net/examples/data_sources/ajax.html");
    cy.get("table[class='display dataTable']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get('table[class="display dataTable"]>thead>tr>th').should(
      "have.length",
      "6"
    );
  });
  it("Check cell data from specific row & column", () => {
    cy.visit("https://datatables.net/examples/data_sources/ajax.html");
    cy.get(
      'table[class="display dataTable"]>tbody>tr:nth-child(5)>td:nth-child(3)'
    ).contains("San Francisco");
  });

  it("Read all rows and columns in first page", () => {
    cy.visit("https://datatables.net/examples/data_sources/ajax.html");
    cy.get('table[class="display dataTable"]>tbody>tr').each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.only("Pagination", () => {
    cy.visit("https://datatables.net/examples/data_sources/ajax.html");
    /*let totalPages;
    cy.get("#example_info").then((e) => {
      let mytext = e.text(); //Showing 1 to 10 of 57 entries
      totalPages = mytext.substring(
        mytext.indexOf("of") + 1,
        mytext.indexOf("entries") - 1
      );
      cy.log("Total number of pages in a table------" + totalPages);
    });*/
    let totalPages = 5;
    for (let p = 1; p <= totalPages; p++) {
      if (totalPages > 1) {
        cy.log("Active pages is--" + p);
        cy.get(
          "div[class$='dt-paging']>nav>button:nth-child(" + p + ")"
        ).click();
        cy.wait(3000);
        cy.get('table[class="display dataTable"]>tbody>tr').each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text());
              });
            });
          }
        );
      }
    }
  });
});
