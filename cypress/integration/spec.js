/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.exec('(yes "Very long output" | head -n 100) && false')
  })
})
