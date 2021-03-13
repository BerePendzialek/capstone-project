import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import showFormatWarmup from '../../services/showFormatWarmup'
import showFormatIntervalsT from '../../services/showFormatIntervalsT'
import showFormatCooldown from '../../services/showFormatCooldown'
import Button from '../Button'
import Icon from 'supercons'
import colorSection from '../../services/colorSection'

WorkoutCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  totalDuration: PropTypes.number,
}

export default function WorkoutCard(props) {
  const {
    name,
    description,
    totalDuration,
    warmup,
    intervalsT,
    cooldown,
  } = props

  const [isWorkoutSectionsVisible, setIsWorkoutSectionsVisible] = useState(
    false
  )

  return (
    <Grid>
      <Title>
        {name} <br />
      </Title>
      <Wrapper>
        <Description>
          <Icon glyph="clock" size={25} /> {totalDuration} Min. <br />
          <br />
          <Icon glyph="docs" size={25} /> {description} <br />
          <br />
        </Description>
        <Button
          onClick={() => setIsWorkoutSectionsVisible(!isWorkoutSectionsVisible)}
        >
          {isWorkoutSectionsVisible ? 'Hide details' : 'Show details'}
        </Button>

        <div hidden={!isWorkoutSectionsVisible}>
          <WarmupSection background={colorSection(warmup.powerHigh)}>
            {showFormatWarmup({ warmup })}
          </WarmupSection>
          <IntervalsTSection background={colorSection(intervalsT.onPower)}>
            {showFormatIntervalsT({ intervalsT })}
          </IntervalsTSection>
          <CooldownSection background={colorSection(cooldown.powerHigh)}>
            {showFormatCooldown({ cooldown })}
          </CooldownSection>
        </div>
      </Wrapper>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
  padding: 20px;
  border-radius: 40px;
  border: 2px solid #a60d29;
  background: transparent;
  width: 100%;
`

const Title = styled.h3`
  margin-top: 0;
  text-align: justify;
  border: 2px solid #a60d29;
  border-radius: 0px 0px 0px 20px;
  color: black;
  padding: 10px;
`

const Description = styled.div`
  text-align: left;
  padding: 5px;
`

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
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
  border-radius: 5px;
`
