import styled from 'styled-components/macro'
import Icon from 'supercons'
import Button from '../Button'
import { NavLink } from 'react-router-dom'
import MusicForm from '../MusicForm'
// import {
//   ShowFormatWarmup,
//   ShowFormatIntervalsT,
//   ShowFormatCooldown,
// } from '../WorkoutCard/ShowFormatFromSections'
// import { selectColor, selectColorByInterval } from '../../services/selectColor'
import Header from '../Header'

export default function MusicPage({ onCreatePlaylist, selectedWorkout }) {
  //const { name, warmup, intervalsT, cooldown } = selectedWorkout

  return (
    <section>
      <HeaderStyled>Music</HeaderStyled>

      <Grid>
        <Heading> Select your music:</Heading>

        <MusicForm
          workout={selectedWorkout}
          onCreatePlaylist={onCreatePlaylist}
        />

        {/* <CardGrid>
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
        </CardGrid> */}

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
`
const Heading = styled.div`
  font-family: 'Tahoma';
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
`

const BackButton = styled(Button)`
  width: 25%;
`
