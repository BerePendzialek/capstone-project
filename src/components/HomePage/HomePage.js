import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Header from '../Header'

export default function HomePage() {
  return (
    <section>
      <HeaderStyled>ZwiftLy</HeaderStyled>

      <Grid>
        <p>
          Get your tailor-made playlist for <br /> Zwift workouts and start{' '}
          <br />
          boosting your performance{' '}
        </p>
        <NextButton as={NavLink} to={{ pathname: '/workout' }}>
          Get started!
        </NextButton>
      </Grid>
    </section>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  height: 220px;
  text-align: center;
  text-transform: none;
`
const Grid = styled.section`
  display: grid;
  gap: 20px;
  overflow-y: scroll;
  place-items: center;
  &::before {
    content: '';
    display: block;
    height: 220px;
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

const NextButton = styled(Button)`
  width: 80%;
  bottom: 58px;
  position: fixed;
  right: 0;
  left: 20px;
  place-items: center;
`
