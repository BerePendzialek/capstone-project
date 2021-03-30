import Header from './Header'

export default {

  title: 'Components/Header',
  component: Header,
}

const Template = args => <Header {...args}> Favorites </Header>

export const PrimaryHeader = Template.bind({})


PrimaryHeader.args = {
  title: 'Favorites',
}
