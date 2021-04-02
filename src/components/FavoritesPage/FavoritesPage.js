import styled from 'styled-components/macro'
import Header from '../Header'
import FavoritesEntry from '../FavoriesEntry/FavoritesEntry'

export default function FavoritesPage({ history }) {
  return (
    <section>
      <HeaderStyled>Favorites</HeaderStyled>
      <Grid>
        <Heading> Your favorite playlists</Heading>

        {history.map(
          ({
            selectedWorkout,
            warmupSongs,
            intervalsTSongs,
            cooldownSongs,
            id,
          }) => (
            <FavoritesEntry
              key={id}
              selectedWorkout={selectedWorkout}
              warmupSongs={warmupSongs}
              intervalsTSongs={intervalsTSongs}
              cooldownSongs={cooldownSongs}
            />
          )
        )}
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
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
`
