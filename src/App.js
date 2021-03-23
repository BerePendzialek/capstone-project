import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from './components/WorkoutPage'
import MusicPage from './components/MusicPage'
import PlaylistPage from './components/PlaylistPage'
//import staticWorkoutList from './components/staticWorkoutList.json'
//import tracksShort from './components/tracksShort.json'

export default function App() {
  const [playlist, setPlaylist] = useState([])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <WorkoutPage />
        </Route>
        <Route
          path="/music"
          render={props => (
            <MusicPage {...props} onCreatePlaylist={createPlaylist} />
          )}
        />
        <Route path="/playlist">
          <PlaylistPage playlist={playlist} />
        </Route>
      </Switch>
    </AppLayout>
  )

  function createPlaylist(values, workout) {
    setPlaylist()
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
