import { results } from '../staticWorkoutList.json'
import Button from '../Button'
import WorkoutCard from '../WorkoutCard'
import React from 'react'
import styled from 'styled-components/macro'

export default function WorkoutPage() {
  return (
    <Grid>
      <Heading> Select your workout:</Heading>

      {results.map(results => (
        <WorkoutCard key={results.name} {...results} />
      ))}
      <Button>Next</Button>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`

const Heading = styled.h2`
  font-family: 'Tahoma';
  font-weight: 600;
  text-transform: uppercase;
  -webkit-text-stroke: 0.1rem currentcolor;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  display: inline-block;
`
