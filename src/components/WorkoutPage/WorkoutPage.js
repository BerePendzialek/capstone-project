import WorkoutCard from '../WorkoutCard'
import Header from '../Header'
import React from 'react'
import styled from 'styled-components/macro'

export default function WorkoutPage({ results, onSelectWorkout }) {
  return (
    <section>
      <HeaderStyled>Workout</HeaderStyled>
      <Grid>
        <Heading> What are you training? </Heading>

        {results.map(workout => (
          <WorkoutCard
            key={workout.name}
            workout={workout}
            onSelectWorkout={onSelectWorkout}
          />
        ))}
      </Grid>
    </section>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
`

const Grid = styled.div`
  display: grid;
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
`

const Heading = styled.div`
  font-family: 'Work Sans';
  font-size: 20px;
  display: inline-block;
  text-transform: uppercase;
`
