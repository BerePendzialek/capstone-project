import styled from 'styled-components/macro'
import MusicForm from '../MusicForm'
import Header from '../Header'

export default function MusicPage({ onCreatePlaylist, selectedWorkout }) {
  return (
    <section>
      <HeaderStyled>Music</HeaderStyled>

      <Grid>
        <Heading> Any music wishes?</Heading>

        <MusicForm
          workout={selectedWorkout}
          onCreatePlaylist={onCreatePlaylist}
        />
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
