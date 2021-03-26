import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from '../WorkoutPage'
import MusicPage from '../MusicPage'
import PlaylistPage from '../PlaylistPage'
import data from '../tracksShort.json'
import { rangeMin, rangeMax } from '../../services/cadenceRange'
import convertCadenceTempo from '../../services/convertCadenceTempo'
import roundedTempo from '../../services/roundedTempo'
import SongCard from '../SongCard/SongCard'

export default function App() {
  const { push } = useHistory()
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
    const newWorkout = {
      ...workout,
      warmup: {
        ...workout.warmup,
        cadence: convertCadenceTempo(workout.warmup.cadence),
      },
      cooldown: {
        ...workout.cooldown,
        cadence: convertCadenceTempo(workout.cooldown.cadence),
      },
      intervalsT: {
        ...workout.intervalsT,
        cadence: convertCadenceTempo(workout.intervalsT.cadence),
      },
    }

    const allSongsForWarmup = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.warmup.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.warmup.cadence)
    )

    const allSongsForIntervalsT = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.intervalsT.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.intervalsT.cadence)
    )

    const allSongsForCooldown = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.cooldown.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.cooldown.cadence)
    )

    console.log(allSongsForWarmup)
    console.log(allSongsForIntervalsT)
    console.log(allSongsForCooldown)

    //setPlaylist(allSongsForWarmup.map(card => <SongCard songInfo={card} />))
    push('/playlist')
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
