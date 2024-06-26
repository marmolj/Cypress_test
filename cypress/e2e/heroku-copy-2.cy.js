describe('template spec', () => {
  it('test valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.radius').click()
    cy.get('#flash').contains("You logged into a secure area!")
  })
  it('test invalido username', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("pedro")
    cy.get('#password').type("SuperSecretPassword!")
  })
  it('test invalido password', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("pedro")
    cy.get('#password').type("SuperSecretPassword!")
})
})