import WorkoutCard from './WorkoutCard'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/WorkoutCard',
  component: WorkoutCard,
}

const workout = {
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

const Template = args => <WorkoutCard workout={workout} {...args} />
export const PrimaryWorkoutCard = Template.bind({})

PrimaryWorkoutCard.args = {
  onSelectWorkout: action('selectWorkout'),
}
