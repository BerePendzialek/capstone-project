import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Icon from 'supercons'

export default function Navigation() {
  return (
    <Bar>
      <NavButton
        aria-label="home"
        as={NavLink}
        exact
        to="/"
        style={{ color: 'var(--color-white)' }}
        activeStyle={{
          color: 'var(--color-aqua-blue)',
        }}
      >
        <Icon glyph="home" size={24} />
        Home
      </NavButton>
      <NavButton
        aria-label="workouts"
        as={NavLink}
        exact
        to="/workout"
        style={{ color: 'var(--color-white)' }}
        activeStyle={{
          color: 'var(--color-aqua-blue)',
        }}
      >
        <Icon glyph="bolt" size={24} />
        Workouts
      </NavButton>
      <NavButton
        aria-label="favorites"
        data-testid="favorites"
        as={NavLink}
        exact
        to="/favorites"
        style={{ color: 'var(--color-white)' }}
        activeStyle={{
          color: 'var(--color-aqua-blue)',
        }}
      >
        <Icon glyph="like" size={24} />
        Favorites
      </NavButton>
    </Bar>
  )
}

const Bar = styled.div`
  background-image: var(--color-main-gradient);
  box-shadow: 0 0 2px #1019331f;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  border-radius: 15px 15px 0 0;
  padding: 10px 50px 10px;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 58px;
  font-weight: 400;
  letter-spacing: 1px;
`

const NavButton = styled.button`
  outline: none;
  font-size: 0.8em;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  text-align: center;
  justify-items: center;
`
