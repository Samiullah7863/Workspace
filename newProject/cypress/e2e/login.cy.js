describe("ALW Dev Login", () => {

  it("Happy Flow with Email and Password", () => {

    cy.login("muhammad.samiullah+alw_student10_1_dev@edly.io", "Test12");

  });

  it("Happy Flow with Phone Number", () => {

    cy.loginWithNumber("381059018");

  });

});
