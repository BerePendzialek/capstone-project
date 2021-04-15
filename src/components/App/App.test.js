import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'

test('renders the provisory heading of the app', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  //render(<App />)
  expect(screen.getByText(/ZwiftLy/i)).toBeInTheDocument()
})
