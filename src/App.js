import WorkoutCard from './components/WorkoutCard'
import React from 'react'
import styled from 'styled-components/macro'
import { results } from './staticWorkoutList.json'

export default function App() {
  return (
    <AppLayout>
      <h2> Select your workout:</h2>
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
  color: #fff;
`
