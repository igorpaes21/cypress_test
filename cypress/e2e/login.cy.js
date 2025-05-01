describe('Login',() => {
  it('Realizar login com sucesso', () => {
    //Arrange 
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.screenshot('login_sucesso.png')

    //Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')


  })

  it('Realizar login informando credencias inválidas', () => {
    //Arrange 
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('user')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()

    cy.screenshot('login_falha.png')

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')

    cy.url().should('eq', 'https://www.saucedemo.com/')


  })

})
