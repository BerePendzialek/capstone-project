import WorkoutCard from './components/WorkoutCard'
import React from 'react'
import styled from 'styled-components/macro'
import { results } from './staticWorkoutList.json'

export default function App() {
  return (
    <AppLayout>
      <Heading> Select your workout:</Heading>
      {results.map(results => (
        <WorkoutCard key={results.name} {...results} />
      ))}
    </AppLayout>
  )
}

const AppLayout = styled.div`
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
