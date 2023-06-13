describe('forgot password', () => {
    it('chick forgot password', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin5555")
        cy.get('.oxd-button').click()
if (cy.get('.oxd-alert')) {
    cy.get('.orangehrm-login-forgot > .oxd-text').click() 
    cy.get('.oxd-input').type("Admin")
    cy.get('.oxd-button--secondary').click()
}

    });


    it('assertion the pass if it is  ', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin5555")
        cy.get('.oxd-button').click()
if (cy.get('.oxd-alert')) {
    cy.get('.orangehrm-login-forgot > .oxd-text').click() 
    cy.get('.oxd-input').type("Admin")
    cy.get('.oxd-button--secondary').click()
}
let expResult="Reset Password link sent successfully"
cy.get('.oxd-text--h6').then((x)=>{
let actResult=x.text()
expect(actResult).to.equal(expResult)
expect(actResult).to.not.equal(expResult)


})
    });
});