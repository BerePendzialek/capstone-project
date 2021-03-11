import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import showFormatWarmup from '../../services/showFormatWarmup'
import showFormatIntervalsT from '../../services/showFormatIntervalsT'
import showFormatCooldown from '../../services/showFormatCooldown'
import Button from '../Button'

WorkoutCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  totalDuration: PropTypes.number,
}

export default function WorkoutCard(props) {
  const { name, description, totalDuration } = props
  const [isWorkoutSectionsVisible, setIsWorkoutSectionsVisible] = useState(
    false
  )

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
        <Button
          onClick={() => setIsWorkoutSectionsVisible(!isWorkoutSectionsVisible)}
        >
          {isWorkoutSectionsVisible ? 'Hide details' : 'Show details'}
        </Button>

        <div hidden={!isWorkoutSectionsVisible}>
          <WarmupSection>{showFormatWarmup(props)}</WarmupSection>
          <IntervalsTSection>{showFormatIntervalsT(props)}</IntervalsTSection>
          <CooldownSection>{showFormatCooldown(props)}</CooldownSection>
        </div>
      </Wrapper>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 5px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #ee7203;
  background: transparent;
  width: 100%;
`

const Title = styled.h3`
  text-align: justify;
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
  background: royalblue;
  padding: 5px;
`

const IntervalsTSection = styled.div`
  text-align: right;
  background: #ffc30b;
  padding: 5px;
`

const CooldownSection = styled.div`
  text-align: right;
  background: lightgray;
  padding: 5px;
`
