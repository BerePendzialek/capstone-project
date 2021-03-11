import WorkoutCard from './WorkoutCard'

export default {
  title: 'WorkoutCard',
  component: WorkoutCard,
}

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

export const Primary = () => <WorkoutCard {...props} />

// With template and controls, but did not work
// const Template = args => <WorkoutCard {...props} />
// export const Primary = Template.bind({})
// Primary.args = {
//   props: props,
// }
