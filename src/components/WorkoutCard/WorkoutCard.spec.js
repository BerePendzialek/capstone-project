import WorkoutCard from './WorkoutCard'
import { render, screen } from '@testing-library/react'

const props = {
  name: 'On FTP-Light',
  description: 'Ride right on FTP for a period of time.',
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
  it('renders a workout´s title, description and duration', () => {
    render(<WorkoutCard {...props} />)
    expect(screen.getByText('Sweet Pot')).toBeInTheDocument()
    expect(
      screen.getByText('Be ready to work on 90% of FTP')
    ).toBeInTheDocument()
    expect(screen.getByText(30)).toBeInTheDocument()
  })
})
