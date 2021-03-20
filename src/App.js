import React from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from './components/WorkoutPage'
import MusicPage from './components/MusicPage'
import PlaylistPage from './components/PlaylistPage'

export default function App() {
  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <WorkoutPage />
        </Route>
        <Route path="/music" render={props => <MusicPage {...props} />} />
        <Route path="/playlist">
          <PlaylistPage />
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
