import React from 'react'
import styled from 'styled-components/macro'

import WorkoutPage from './components/WorkoutPage/WorkoutPage'

export default function App() {
  return (
    <AppLayout>
      <WorkoutPage />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
