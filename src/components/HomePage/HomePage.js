import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import Header from '../Header'
import Zwift from '../../assets/zwift_2.png'

export default function HomePage() {
  return (
    <HomeWrapper>
      <HeaderStyled>ZwiftLy</HeaderStyled>
      <Grid>
        <p>
          Your Playlist <br /> for Zwift workouts <br />
        </p>
      </Grid>
      <NextButton as={NavLink} to={{ pathname: '/workout' }}>
        Get started!
      </NextButton>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  background: no-repeat url(${Zwift});
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  height: 250px;
  text-align: center;
  text-transform: none;
  background-image: none;
  color: var(--color-white);
  letter-spacing: 1.5px;
  font-weight: 800;
  font-size: 350%;
`
const Grid = styled.section`
  display: grid;
  gap: 240px;
  overflow-y: scroll;
  place-items: center;
  width: 100%;
  &::before {
    content: '';
    display: block;
    height: 250px;
    width: 100%;
  }
  /* &::after {
    content: '';
    display: block;
    height: 58px;
    width: 100%;
  } */
  &::-webkit-scrollbar {
    display: none;
  }

  p {
    text-align: center;
    color: var(--color-white);
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 1.2px;
  }
`

const NextButton = styled.button`
  width: 70%;
  bottom: 58px;
  place-items: center;
  background: var(--color-white-smoked);
  border-radius: 5px;

  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  color: #57a4f5;
  font-size: 0.9em;
  font-weight: 600;
  cursor: pointer;
  right: 50px;
  left: 55px;
  position: fixed;
`
