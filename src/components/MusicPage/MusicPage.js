import styled from 'styled-components/macro'
import {
  ShowFormatWarmup,
  ShowFormatIntervalsT,
  ShowFormatCooldown,
} from '../WorkoutCard/ShowFormatFromSections'
import { selectColor, selectColorByInterval } from '../../services/selectColor'
import Button from '../Button'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'

export default function MusicPage({ location }) {
  const { name, warmup, intervalsT, cooldown } = location.workout

  return (
    <Grid>
      <Title>
        {name} <br />
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

      <BackButton as={NavLink} to={{ pathname: '/' }}>
        <Icon glyph="back" size={24} />
        Back
      </BackButton>
    </Grid>
  )
}
const Grid = styled.section`
  display: grid;
  margin-left: 0;
  gap: 20px;
  padding: 10px;
  background: white;
  border: 2px solid #ee7203;
  border-radius: 0px 60px 60px 0px;
  color: black;
  width: 100%;
`

const Title = styled.h3`
  margin: 15px 5px 0 5px;
  text-align: justify;
  padding: 2px;
`

const Wrapper = styled.section`
  display: grid;
  gap: 2px;
`

const WarmupSection = styled.div`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  border-radius: 5px;
`

const IntervalsTSection = styled.div`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  border-radius: 5px;
`

const CooldownSection = styled.div`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  margin-bottom: 25px;
  border-radius: 5px;
`

const BackButton = styled(Button)`
  width: 50%;
`
