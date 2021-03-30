import SongCard from './SongCard'

export default {
  title: 'Components',
  component: SongCard,
}

const songInfo = {
  id: '0VjIjW4GlUZAMYd2vXMi3b',
  artist_name: 'The Weeknd',
  images: 'https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36',
  album_name: 'After Hours',
  album_release_date: '2020-03-20',
  name: 'Blinding Lights',
  popularity: 96,
  danceability: 0.514,
  energy: 0.73,
  tempo: 171.005,
  duration_ms: 200040,
  genre: 'Pop',
}

export const PrimarySongCard = () => <SongCard songInfo={songInfo} />
