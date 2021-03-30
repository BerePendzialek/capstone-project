import styled from 'styled-components/macro'
import Icon from 'supercons'
import Button from '../Button'
import { NavLink } from 'react-router-dom'
import MusicForm from '../MusicForm'
import {
  ShowFormatWarmup,
  ShowFormatIntervalsT,
  ShowFormatCooldown,
} from '../WorkoutCard/ShowFormatFromSections'
import { selectColor, selectColorByInterval } from '../../services/selectColor'
import Header from '../Header'

export default function MusicPage({ location, onCreatePlaylist }) {
  const { name, warmup, intervalsT, cooldown } = location.workout

  return (
    <section>
      <HeaderStyled>Music</HeaderStyled>

      <Grid>
        <Heading> Select your music:</Heading>

        <MusicForm
          workout={location.workout}
          onCreatePlaylist={onCreatePlaylist}
        />

        <CardGrid>
          <Title>
            Your selected workout:
            <br /> {name}
          </Title>

          <Wrapper>
            <div>
              <WarmupSection background={selectColor(warmup.powerHigh)}>
                <ShowFormatWarmup warmup={warmup} />
              </WarmupSection>
              <IntervalsTSection
                background={selectColorByInterval(intervalsT.onPower)}
              >
                <ShowFormatIntervalsT intervalsT={intervalsT} />
              </IntervalsTSection>
              <CooldownSection background={selectColor(cooldown.powerHigh)}>
                <ShowFormatCooldown cooldown={cooldown} />
              </CooldownSection>
            </div>
          </Wrapper>
        </CardGrid>

        <BackButton as={NavLink} to={{ pathname: '/' }}>
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
  &::-webkit-scrollbar {
    display: none;
  }
`

const CardGrid = styled.section`
  display: grid;
  margin-left: 0;
  gap: 20px;
  padding: 10px;
  background: white;
  border-radius: 0px 60px 60px 0px;
  color: black;
  width: 100%;
`

const Heading = styled.div`
  font-family: 'Tahoma';
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
`

const Title = styled.h4`
  margin: 15px 5px 0 5px;
  text-align: justify;
  padding: 2px;
`

const Wrapper = styled.section`
  display: grid;
  gap: 2px;
  font-size: 0.8rem;
`

const WarmupSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  border-radius: 5px;
`

const IntervalsTSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  border-radius: 5px;
`

const CooldownSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  margin-bottom: 25px;
  border-radius: 5px;
`

const BackButton = styled(Button)`
  width: 25%;
`
