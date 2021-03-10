import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the provisory heading of the app', () => {
  render(<App />)
  expect(screen.getByText(/select your workout/i)).toBeInTheDocument()
})
