import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import Icon from 'supercons'
import Button from '../Button'

export default function HomePage() {
  return (
    <Wrapper>
      <Grid>
        <Logo>ZwiftLy</Logo>
        <Content>
          <p>
            Get your tailor-made playlist for Zwift workouts <br></br> and start
            boosting your performance{' '}
          </p>
          <NextButton as={NavLink} to={{ pathname: '/workout' }}>
            Next
            <Icon glyph="enter" size={24} />
          </NextButton>
        </Content>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--color-main-gradient);
  height: 100vh;
  left: 0;
  //url('./zwift.png') no-repeat !important;
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  height: 100vh;
  padding: 0 44px;
  place-content: center;
`

const Logo = styled.div`
  border-radius: 0;
  font-size: 1.5em;
  top: 80px;
  left: 0;
  height: 10px;
  text-align: center;
  place-self: center;
  width: 90%;
`
const Content = styled.div`
  justify-self: center;
  p {
    color: white;
    font-size: 0.9;
    font-weight: 300;
    text-align: center;
    margin-top: 24px;
  }
`
const NextButton = styled(Button)`
  width: 30%;
`
