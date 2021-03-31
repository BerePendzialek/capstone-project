import styled from 'styled-components/macro'
import Icon from 'supercons'
import Button from '../Button'
import { NavLink } from 'react-router-dom'
import MusicForm from '../MusicForm'

import Header from '../Header'

export default function MusicPage({ onCreatePlaylist, selectedWorkout }) {
  return (
    <section>
      <HeaderStyled>Music</HeaderStyled>

      <Grid>
        <Heading> Select your music:</Heading>

        <MusicForm
          workout={selectedWorkout}
          onCreatePlaylist={onCreatePlaylist}
        />

        <BackButton as={NavLink} to={{ pathname: '/workout' }}>
          <Icon glyph="back" size={24} />
          Back
        </BackButton>
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
`
const Heading = styled.div`
  font-family: 'Tahoma';
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
`

const BackButton = styled(Button)`
  width: 25%;
`
