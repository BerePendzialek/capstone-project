import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('checks if active Link has class active', () => {
    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <Navigation />
      </MemoryRouter>
    )
    expect(screen.getByTestId(/Favorites/i)).toHaveClass('active')
  })
})
