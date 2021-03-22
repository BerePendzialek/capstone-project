import MusicForm from './MusicForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: MusicForm,
}

const DefaultMusicForm = args => <MusicForm {...args} />

export const PrimaryMusicForm = DefaultMusicForm.bind({})

PrimaryMusicForm.args = {
  handleSubmit: action('onSubmit'),
  onCreatePlaylist: action('createPlaylist'),
}
