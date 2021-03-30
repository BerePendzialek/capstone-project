import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Icon from 'supercons'

export default function Navigation() {
  return (

    <Wrapper>
      <Bar>
        <Link exact to="/">
          <Icon glyph="home" size={24} />
        </Link>
        <Link exact to="/favorites" data-testid="favorites">
          <Icon glyph="like" size={24} />
        </Link>
      </Bar>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display: grid;
  place-items: center;
  width: 100%;
`


const Bar = styled.nav`

  background: linear-gradient(200deg, #ffa500 0%, #739ebb 60%);
  border-radius: 28px;
  box-shadow: 0 0 2px #1019331f;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  padding: 10px 50px 8px;
`


const Link = styled(NavLink)`

  width: 28px;
  &:focus {
    outline: none;
  }
`
