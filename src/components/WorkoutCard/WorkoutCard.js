import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import showFormatWarmup from '../../services/showFormatWarmup'
import showFormatIntervalsT from '../../services/showFormatIntervalsT'
import showFormatCooldown from '../../services/showFormatCooldown'

WorkoutCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  totalDuration: PropTypes.number,
}

export default function WorkoutCard(props) {
  const { name, description, totalDuration } = props

  return (
    <Grid>
      <Title>{name}</Title>
      <Wrapper>
        <Description>
          Description: {description} <br />
          <br />
          Total duration: {totalDuration}
          <br />
        </Description>
        <WarmupSection>{showFormatWarmup(props)}</WarmupSection>
        <IntervalsTSection>{showFormatIntervalsT(props)}</IntervalsTSection>
        <CooldownSection>{showFormatCooldown(props)}</CooldownSection>
      </Wrapper>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 5px;
  padding: 20px;
  border-radius: 5px;
  background: #cad7f6;
  width: 100%;
`

const Title = styled.h3`
  text-align: justify;
`

const Description = styled.div`
  text-align: left;
  border: 2px solid lightgray;
  padding: 5px;
`

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
`

const WarmupSection = styled.div`
  text-align: right;
  background: lightblue;
  padding: 5px;
`

const IntervalsTSection = styled.div`
  text-align: right;
  background: royalblue;
  padding: 5px;
`

const CooldownSection = styled.div`
  text-align: right;
  background: lightskyblue;
  padding: 5px;
`
