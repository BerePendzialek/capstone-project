import WorkoutCard from './WorkoutCard'
export default {
  title: 'WorkoutCard',
  component: WorkoutCard,
}

const Template = args => <WorkoutCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  Name: 'Sweet Pot',
  Description: 'Be ready to work on 90% of FTP',
  TotalDuration: 30,
}
