/// <reference types="cypress" />

describe('santa loaded', () => {
  beforeEach(() => {
    cy.visit('https://staging.lpitko.ru/')
  })

  it('santa web page loaded', () => {
    cy.contains('Создать коробку')
      .parents('div')
      .should('have.class', 'home-page-buttons')
  })
})
