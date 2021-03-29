import Header from './Header'

export default {
  title: 'Components',
  component: Header,
}

const DefaultHeader = args => <Header {...args}> Favorites </Header>

export const PrimaryHeader = DefaultHeader.bind({})

PrimaryHeader.args = {
  title: 'Favorites',
}
