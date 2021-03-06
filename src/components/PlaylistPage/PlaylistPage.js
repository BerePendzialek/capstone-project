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
        <Heading>Songs for your workout</Heading>
        <Playlist
          warmupSongs={warmupSongs}
          intervalsTSongs={intervalsTSongs}
          cooldownSongs={cooldownSongs}
          selectedWorkout={selectedWorkout}
        />

        <Button onClick={onSavePlaylist}>Save this Playlist</Button>
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
    height: 48px;
    width: 100%;
  }
  &::after {
    content: '';
    display: block;
    height: 48px;
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const Heading = styled.div`
  font-family: 'Work Sans';
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
`
