import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Icon from 'supercons'
import Button from '../Button'
import Header from '../Header'

export default function HomePage() {
  return (
    <div>
      <HeaderStyled>Welcome to this playlist generator</HeaderStyled>

      <Grid>
        <NextButton as={NavLink} to={{ pathname: '/workout' }}>
          Next
          <Icon glyph="enter" size={24} />
        </NextButton>
      </Grid>
    </div>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  height: 220px;
  text-align: center;
`
const Grid = styled.section`
  display: grid;
  gap: 20px;
  overflow-y: scroll;
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
  width: 25%;
`
