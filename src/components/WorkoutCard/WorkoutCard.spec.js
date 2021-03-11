import WorkoutCard from './WorkoutCard'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

const props = {
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
  it('renders a workout´s title, description, duration and show/hide button', () => {
    render(<WorkoutCard {...props} />)
    expect(screen.getByText(/On FTP-Light/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Ride right on FTP for a period of time/i)
    ).toBeVisible()
    expect(screen.getByText(/40/)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has a button that calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Show details</Button>)
    userEvent.click(screen.getByText(/show details/i))
    expect(handleClick).toHaveBeenCalled()
  })
})
