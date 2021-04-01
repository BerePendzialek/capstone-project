import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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

export default function WorkoutCard({ workout, onSelectWorkout }) {
  const {
    name,
    description,
    totalDuration,
    warmup,
    intervalsT,
    cooldown,
  } = workout

  const [isWorkoutSectionsVisible, setIsWorkoutSectionsVisible] = useState(
    false
  )

  return (
    <Grid>
      <Title>
        {name} <br />
      </Title>
      <Teaser>
        <IconWrapper>
          <Icon glyph="clock" size={24} /> {totalDuration} Min <br />
          <Icon glyph="info" size={24} /> Intermediate <br />
        </IconWrapper>
      </Teaser>

      <Wrapper>
        <OverviewButton
          onClick={() => setIsWorkoutSectionsVisible(!isWorkoutSectionsVisible)}
        >
          {isWorkoutSectionsVisible ? (
            <OverviewWrapper> Hide overview</OverviewWrapper>
          ) : (
            <OverviewWrapper>Show overview</OverviewWrapper>
          )}
        </OverviewButton>

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

      <SelectButton
        as={NavLink}
        to="/music"
        onClick={() => onSelectWorkout(workout)}
      >
        Select this workout
      </SelectButton>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
  padding: 15px;
  background: var(--color-white-smoked);
  border: 1px solid var(--color-lila-light);
  border-radius: 0px 60px 0px 0px;
  color: var(--color-dark-grey);
  width: 335px;
  margin-top: 20px;
  justify-content: center;
`

const Title = styled.h3`
  margin: 15px 0 0;
  /* padding: 2px; */
  color: var(--dark-grey);
`

const Teaser = styled.div`
  text-align: left;
  /* padding: 5px; */
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
`
const IconWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: space-evenly;
`

const Description = styled.div`
  text-align: left;
  padding: 5px;
  margin: 10px 0px;
`

const Wrapper = styled.section`
  display: grid;
  gap: 2px;
`
const OverviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const OverviewButton = styled(Button)`
  width: 305px;
`

const SelectButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`
