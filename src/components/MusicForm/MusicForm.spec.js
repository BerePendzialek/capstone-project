import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MusicForm from './MusicForm'
import { MemoryRouter } from 'react-router-dom'

describe('MusicForm', () => {
  it('renders a form with two inputs and a button as link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <MusicForm />
      </MemoryRouter>
    )

    expect(screen.getByLabelText('Energy Level')).toBeInTheDocument()
    expect(screen.getByLabelText('Genre')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders two required input fields', () => {
    render(
      <MemoryRouter initialEntries={['/music']}>
        <MusicForm />
      </MemoryRouter>
    )

    expect(screen.getByLabelText('Energy Level')).toBeRequired()
    expect(screen.getByLabelText('Genre')).toBeRequired()
  })

  it('selects the right option', () => {
    const callback = jest.fn()
    render(
      <MemoryRouter initialEntries={['/music']}>
        (<MusicForm onCreatePlaylist={callback} />)
      </MemoryRouter>
    )
    userEvent.selectOptions(screen.getByTestId('energy-select'), ['High'])
    expect(screen.getByTestId('High').selected).toBe(true)
  })

  it('calls onCreatePlaylist on form submit', () => {
    const callback = jest.fn()
    render(
      <MemoryRouter initialEntries={['/music']}>
        (<MusicForm onCreatePlaylist={callback} />)
      </MemoryRouter>
    )
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalled()
  })
})
