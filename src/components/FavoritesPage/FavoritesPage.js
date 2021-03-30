import Icon from 'supercons'
import styled from 'styled-components/macro'
import Header from '../Header'

export default function FavoritesPage() {
  return (

    <section>
      <HeaderStyled>Favorites</HeaderStyled>
      <Grid>
        <Heading>
          {' '}
          Soon you´ll be able to save your favorite playlists
          <Icon glyph="like" size={24} />
        </Heading>
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
