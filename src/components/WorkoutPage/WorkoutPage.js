import WorkoutCard from '../WorkoutCard'
import Header from '../Header'
import React from 'react'
import styled from 'styled-components/macro'

export default function WorkoutPage({ results, onSelectWorkout }) {
  return (
    <div>
      <HeaderStyled>Workout</HeaderStyled>
      <Grid>
        <Heading> Select your workout:</Heading>

        {results.map(workout => (
          <WorkoutCard
            key={workout.name}
            workout={workout}
            onSelectWorkout={onSelectWorkout}
          />
        ))}
      </Grid>
    </div>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
`

const Grid = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
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

const Heading = styled.div`
  font-family: 'Tahoma';
  font-weight: 300;
  font-size: 20px;
  display: inline-block;
`
