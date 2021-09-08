describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.viewport(1920, 1080);
    cy.visit("https://tailwinduikit.com/");
    cy.wait(5000);
    //clciking on pricing page
    cy.get(
      "#__next > div > main > div > div:nth-child(1) > div.\\32 xl\\:px-0.lg\\:px-10 > div > div.w-full.xl\\:flex.items-center > div.relative.z-20.flex.flex-col.xl\\:items-start.items-center.xl\\:w-1\\/2 > div.mt-7.md\\:flex.items-start.xl\\:justify-start.justify-center.w-full > a > button"
    ).click();

    cy.wait(5000);

    //clciking on login 
    cy.get(
      "#header > div.mx-auto.container.lg\\:py-6.px-4.xl\\:px-12.\\32 xl\\:px-4 > div > div:nth-child(2) > div.ml-6.xl\\:mr-6.relative.dark\\:hidden.block > a > button"
    ).click();

    cy.wait(3000);
    cy.get("#email2").type('testoperation@test.com',{delay:100});
    cy.wait(1500);
    cy.get("#password").type("176hgwqctest", { delay: 100 });
    cy.wait(2000);
    cy.get("#btnlog").click();    // Get an input, type into it and verify that the value has been updated
    

  });
      it("equal", () =>
        expect(cy.url()).to.equal("https://app.tailwinduikit.com/components"));
});
