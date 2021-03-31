import styled from 'styled-components/macro'
import Header from '../Header'
import Button from '../Button'
import Playlist from '../Playlist'

export default function PlaylistPage({
  warmupSongs,
  intervalsTSongs,
  cooldownSongs,
  selectedWorkout,
  onSavePlaylist,
}) {
  return (
    <section>
      <HeaderStyled>Playlist</HeaderStyled>

      <Grid>
        <Heading>Songs for your next workout:</Heading>
        <Playlist
          warmupSongs={warmupSongs}
          intervalsTSongs={intervalsTSongs}
          cooldownSongs={cooldownSongs}
          selectedWorkout={selectedWorkout}
        />
        Playlist duration can exceed or be under the workout duration <br />
        <Button onClick={onSavePlaylist}>Save Playlist</Button>
      </Grid>
    </section>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
`

const Grid = styled.section`
  display: grid;
  gap: 10px;
  overflow-y: scroll;
  &::before {
    content: '';
    display: block;
    height: 58px;
    width: 100%;
  }
  &::after {
    content: '';
    display: block;
    height: 58px;
    width: 100%;
  }
`

const Heading = styled.div`
  font-family: 'Tahoma';
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
`
