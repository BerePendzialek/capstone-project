import styled from 'styled-components/macro'
import Header from '../Header'
import Button from '../Button'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'
import Playlist from '../Playlist'

export default function PlaylistPage({
  playlist,
  warmupSongs,
  intervalsTSongs,
  cooldownSongs,
}) {
  return (
    <div>
      <HeaderStyled>Playlist</HeaderStyled>

      <Grid>
        <Heading>Songs for your next workout:</Heading>
        <Playlist
          playlist={playlist}
          warmupSongs={warmupSongs}
          intervalsTSongs={intervalsTSongs}
          cooldownSongs={cooldownSongs}
        />
        Playlist duration can exceed or be under the workout duration <br />
        <BackButton as={NavLink} to={{ pathname: '/music' }}>
          <Icon glyph="back" size={24} />
          Back
        </BackButton>
      </Grid>
    </div>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
`

const Grid = styled.section`
  display: grid;
  gap: 20px;
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
  &::-webkit-scrollbar {
    display: none;
  }
`

const Heading = styled.div`
  font-family: 'Tahoma';
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
`

const BackButton = styled(Button)`
  width: 25%;
  border-radius: 5px;
`
