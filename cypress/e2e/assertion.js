describe('Assertion demo', () => {
    it('Implicit assertion', () => {

        //should  and 

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       // cy.url().should('include','orangehrmlive.com')
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('contain','orangehrm')


        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')
  
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','green')

//....................................
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')
//.....................


        //cy.get('.orangehrm-login-branding > img').should('be.visible')
       // cy.get('.orangehrm-login-branding > img').should('exist')


       cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
        .and('exist') //logo exist
//...............

        cy.xpath("//a").should('have.length',5)    //num of links

//..................

        cy.get("input[placeholder='Username']").type("Admin") //provide a value into inputbox
        cy.get("input[placeholder='Username']").should('have.value','Admin') //check value



    });
it('Explicit assertion', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()


    let expName="Paul Collings";
    cy.get(".oxd-userdropdown-name").then((x)=>{
              
        let actName=x.text()


    //BDD style
        expect(actName).to.equal(expName)
        expect(actName).to.not.equal(expName)

   //TDD style 
   assert.equal(actName,expName)
   assert.notEqual(actName,expName)
    })


});










});