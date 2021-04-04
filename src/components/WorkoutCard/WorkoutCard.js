import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  ShowFormatWarmup,
  ShowFormatIntervalsT,
  ShowFormatCooldown,
} from '../../services/ShowFormatFromSections'

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

      <IconWrapper>
        <Icon glyph="clock" size={20} /> {totalDuration} Min <br />
        <Icon glyph="info" size={20} /> Intermediate <br />
      </IconWrapper>

      <Wrapper>
        <OverviewButton
          onClick={() => setIsWorkoutSectionsVisible(!isWorkoutSectionsVisible)}
        >
          {isWorkoutSectionsVisible ? (
            <OverviewWrapper>
              {' '}
              Hide overview <Icon glyph="up-caret" size={20} />
            </OverviewWrapper>
          ) : (
            <OverviewWrapper>
              {' '}
              Show overview <Icon glyph="down-caret" size={20} />
            </OverviewWrapper>
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
  color: var(--dark-grey);
`

const IconWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 8fr;
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
  justify-content: flex-start;
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
  border: none;
  border-top: 0.5px solid var(--color-grey);
  border-bottom: 0.5px solid var(--color-grey);
  border-radius: 0;
  font-size: 0.8em;
  font-weight: 400;
  color: var(--color-dark-grey);
`

const SelectButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`
