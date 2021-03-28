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
import { results } from '../staticWorkoutList.json'

export default function App() {
  const { push } = useHistory()

  const [warmupSongs, setWarmupSongs] = useState([])
  const [intervalsTSongs, setIntervalsTSongs] = useState([])
  const [cooldownSongs, setCooldownSongs] = useState([])
  const [playlist, setPlaylist] = useState([])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <WorkoutPage results={results} />
        </Route>
        <Route
          path="/music"
          render={props => (
            <MusicPage {...props} onCreatePlaylist={createPlaylist} />
          )}
        />

        <Route path="/playlist">
          <PlaylistPage
            playlist={playlist}
            warmupSongs={warmupSongs}
            intervalsTSongs={intervalsTSongs}
            cooldownSongs={cooldownSongs}
          />
        </Route>
      </Switch>
    </AppLayout>
  )

  function createPlaylist(values, workout) {
    // convert workout from cadence to tempo
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

    // WarmupSongs

    const allSongsForWarmup = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.warmup.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.warmup.cadence) &&
        song.genre === values.genre
    )

    // shuffle the array before working with it

    const shuffledWarmupSongs = allSongsForWarmup.sort(
      () => 0.5 - Math.random()
    )

    // exact for the duration
    let counterW = 0
    const warmupSongsTotal = shuffledWarmupSongs.reduce((acc, cur) => {
      const warmup_duration = workout.warmup.duration_ms
      if (counterW <= warmup_duration) {
        const nextTimeSum = counterW + cur.duration_ms
        if (nextTimeSum <= warmup_duration) {
          counterW = counterW + cur.duration_ms
          acc.push(cur)
        }
      }
      return acc
    }, [])

    // IntervalsT Songs
    const allSongsForIntervalsT = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.intervalsT.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.intervalsT.cadence) &&
        song.genre === values.genre
    )
    // shuffle the array before working with it

    const shuffledIntervalsTSongs = allSongsForIntervalsT.sort(
      () => 0.5 - Math.random()
    )

    // exact for the duration
    let counterI = 0

    const intervalsTSongsTotal = shuffledIntervalsTSongs.reduce((acc, cur) => {
      const intervalsT_duration = workout.intervalsT.total_interval_duration_ms
      if (counterI <= intervalsT_duration) {
        const nextTimeSum = counterI + cur.duration_ms
        if (nextTimeSum <= intervalsT_duration) {
          counterI = counterI + cur.duration_ms
          acc.push(cur)
        }
      }
      return acc
    }, [])

    // Cooldown songs
    const allSongsForCooldown = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.cooldown.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.cooldown.cadence) &&
        song.genre === values.genre
    )

    // shuffle the array before working with it

    const shuffledCooldownSongs = allSongsForCooldown.sort(
      () => 0.5 - Math.random()
    )

    // exact for the duration
    let counterC = 0
    const cooldownSongsTotal = shuffledCooldownSongs.reduce((acc, cur) => {
      const cooldown_duration = workout.cooldown.duration_ms
      if (counterC <= cooldown_duration) {
        const nextTimeSum = counterC + cur.duration_ms
        if (nextTimeSum <= cooldown_duration) {
          counterC = counterC + cur.duration_ms
          acc.push(cur)
        }
      }
      return acc
    }, [])

    setWarmupSongs(warmupSongsTotal)
    setIntervalsTSongs(intervalsTSongsTotal)
    setCooldownSongs(cooldownSongsTotal)
    setPlaylist()
    push('/playlist')
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
