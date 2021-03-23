import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from './components/WorkoutPage'
import MusicPage from './components/MusicPage'
import PlaylistPage from './components/PlaylistPage'
//import { results } from './components/staticWorkoutList.json'
import { data } from './components/tracksShort.json'
import convertTempoToCadence from './services/convertTempoToCadence'

export default function App() {
  const [playlist, setPlaylist] = useState([])
  const [duration, setDuration] = useState(0)

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
    // array with rpm songs, convertion using function
    const convertSongsTempoToCadence = data.map(({ tempo }) =>
      convertTempoToCadence(tempo)
    )

    // Match by cadence, array
    const warmupSongSelection = convertSongsTempoToCadence.filter(
      song => song.tempo === workout.warmup.cadence
    )

    setPlaylist()
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
