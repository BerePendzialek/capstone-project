import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders a Button component', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
