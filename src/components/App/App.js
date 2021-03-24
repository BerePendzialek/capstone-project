import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from '../WorkoutPage'
import MusicPage from '../MusicPage'
import PlaylistPage from '../PlaylistPage'
import { results } from '../staticWorkoutList.json'
import { data } from '../tracksShort.json'
import convertCadenceTempo from '../../services/convertCadenceTempo'

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
    // 1) Match warmup cadence of the workout with tempo of song
    // convert warmup section cadence in to tempo, using formula
    // e.g. the workout has a cadence of 90 and now will have a tempo of 180.
    // The songs have a tempo of shown like this 184.874. Problems by comparing?
    const workoutCadenceIntoTempo = workout.map(({ cadence }) =>
      convertCadenceTempo(cadence)
    )

    // Filter songs
    // both workout section and songs have now a tempo that can be compared
    // not just a plain filter like match workout cadence and song tempo (song.tempo === workout.warmup.tempo)
    // But a filter like within a range. E.g if the tempo of a workout is 180,
    // filter songs with tempo betweeen 170 - 190

    const warmupSongsSelection = workoutCadenceIntoTempo.filter(
      song => workout.warmup === song.tempo
    )

    // 2) Show a number of songs according to the duration of a section
    // get warmup duration_ms (values are now in ms, later to be presented in minutes and seconds)

    // from filtered songs (step 1): select enough songs to fill the warmup duration time

    // display the X songs that can match the warmup section,
    // e.g. it has a 10 minute duration and a cadence of 90, now tempo of 180.

    setPlaylist()
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
