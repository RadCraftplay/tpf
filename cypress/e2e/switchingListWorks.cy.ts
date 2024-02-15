describe('template spec', () => {
  it('switching lists works', () => {
    cy.visit('localhost:4200/dashboard')
    cy.wait(1000)

    cy.get("app-hamburger-menu").get("button").filter(':visible').click()
    cy.wait(250)

    cy.get("button").get("button.navbar-list-item").contains("Lata").click()
    cy.wait(250)

    cy.get("app-hamburger-menu").filter(':visible').click()
    cy.wait(250)

    cy.get("app-list-header").should('contain.text', "Lata")
  })
})