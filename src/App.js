import React from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from './components/WorkoutPage'
import MusicPage from './components/MusicPage'

export default function App() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <WorkoutPage />
        </Route>
        <Route path="/music">
          <MusicPage />
        </Route>
      </Switch>
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
