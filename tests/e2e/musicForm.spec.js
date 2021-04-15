/// <reference types="Cypress" />

describe('<MusicForm /> component', () => {
  beforeEach(() => {
    cy.visit('/music'), cy.viewport('iphone-6')
  })

  it('should render a form with two select input fields and a button', () => {
    cy.get('[data-testid=form]').should('be.visible')
    cy.get('select[name="energy"]').should('exist')
    cy.get('select[name="genre"]').should('exist')
    cy.get('[data-testid=button]').should('exist')
  })
  it('should fill in the select fields properly', () => {
    const music = {
      energy: 'High',
      genre: 'Alternative rock',
    }
    cy.get('[name="energy"]').select(music.energy)
    cy.get('[name="genre"]').select(music.genre)
  })
})
