import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ShowFormatWarmup,
  ShowFormatIntervalsT,
  ShowFormatCooldown,
} from './ShowFormatFromSections'

import Button from '../Button'
import Icon from 'supercons'
import { selectColor, selectColorByInterval } from '../../services/selectColor'

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
      <Teaser>
        <Icon glyph="clock" size={24} /> {totalDuration} Min <br />
        <Icon glyph="info" size={24} /> Level: Intermediate <br />
      </Teaser>

      <Wrapper>
        <Button
          onClick={() => setIsWorkoutSectionsVisible(!isWorkoutSectionsVisible)}
        >
          {isWorkoutSectionsVisible ? 'Hide overview' : 'Show overview'}
        </Button>

        <div hidden={!isWorkoutSectionsVisible}>
          <Description>{description}</Description>
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

      <SelectButton as={Link} to="/music">
        Select this workout on <Icon glyph="enter" size={24} />
      </SelectButton>
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

const Teaser = styled.div`
  text-align: left;
  padding: 5px;
  display: inline-block;
`

const Description = styled.div`
  text-align: left;
  padding: 5px;
  margin: 10px 0px 10px 0px;
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
const SelectButton = styled(Button)`
  width: 50%;
`
