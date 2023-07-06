describe("Practice", () => {
  it("Practice Test", () => {

    let numberOfItems = 4;
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("Capsicum");
    cy.wait(1000);

    for (let i=1; i<numberOfItems; i++) {
        cy.get('.increment').click();   
    }

    cy.get('.product-action > button').click();
    cy.get('.cart-icon > img').click();

    cy.get('p.quantity').first().contains(numberOfItems);

  });
});
