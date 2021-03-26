import styled from 'styled-components/macro'
import Button from '../Button'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'
import Playlist from '../Playlist'

export default function PlaylistPage(playlist) {
  return (
    <Grid>
      <Heading>Your playlist:</Heading>
      and here is where the magic happens! <br />
      <Playlist playlist={playlist}></Playlist>
      <Wrapper>
        <BackButton as={NavLink} to={{ pathname: '/music' }}>
          <Icon glyph="back" size={24} />
          Back
        </BackButton>
        <BackButton as={NavLink} to={{ pathname: '/' }}>
          <Icon glyph="home" size={24} />
          New
        </BackButton>
      </Wrapper>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
`

const Heading = styled.h2`
  font-family: 'Tahoma';
  font-weight: 600;
  text-transform: uppercase;
  -webkit-text-stroke: 0.1rem currentcolor;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  display: inline-block;
`
const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
`

const BackButton = styled(Button)`
  width: 40%;
  border-radius: 5px;
`
