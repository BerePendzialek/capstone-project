import WorkoutCard from './WorkoutCard'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'

const workout = {
  name: 'On FTP-Light',
  description: 'Ride right on FTP for a period of time',
  totalDuration: 40,
  warmup: {
    duration: 10,
    powerLow: 60,
    powerHigh: 120,
    pace: 0,
    cadence: 90,
  },
  intervalsT: {
    repeat: 2,
    onDuration: 5,
    offDuration: 4,
    onPower: 180,
    offPower: 110,
    pace: 0,
    cadence: 90,
    cadenceResting: 90,
  },

  cooldown: {
    duration: 10,
    powerLow: 120,
    powerHigh: 60,
    pace: 0,
    cadence: 90,
  },
}

describe('WorkoutCard', () => {
  it('renders a workout´s title, description, duration, show/hide button and select', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <WorkoutCard workout={workout} />
      </MemoryRouter>
    )
    expect(screen.getByText(/On FTP-Light/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Ride right on FTP for a period of time/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/40/)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has a button that renders a description when clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <WorkoutCard workout={workout} />
      </MemoryRouter>
    )
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(screen.queryByText(/warmup/i)).not.toBeInTheDocument()
  })

  it('has a button that links to the music page on click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <WorkoutCard workout={workout} />
      </MemoryRouter>
    )
    expect(screen.getByText(/select/i)).toBeInTheDocument()
  })
})
