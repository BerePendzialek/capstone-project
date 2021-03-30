import MusicForm from './MusicForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/MusicForm',
  component: MusicForm,
}

const Template = args => <MusicForm {...args} />

export const PrimaryMusicForm = Template.bind({})

PrimaryMusicForm.args = {
  handleSubmit: action('onSubmit'),
  onCreatePlaylist: action('createPlaylist'),
}
