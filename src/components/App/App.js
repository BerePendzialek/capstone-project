import React, { useState, useEffect } from 'react'
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
import Navigation from '../Navigation/Navigation'
import HomePage from '../HomePage/HomePage'
import FavoritesPage from '../FavoritesPage'
import { v4 as uuidv4 } from 'uuid'
import { loadFromLocal, saveToLocal } from '../../lib/localStorage'

export default function App() {
  const { push } = useHistory()
  const [selectedWorkout, setSelectedWorkout] = useState({})
  const [warmupSongs, setWarmupSongs] = useState([])
  const [intervalsTSongs, setIntervalsTSongs] = useState([])
  const [cooldownSongs, setCooldownSongs] = useState([])
  const [history, setHistory] = useState(loadFromLocal('playlistHistory') ?? [])

  useEffect(() => {
    saveToLocal('playlistHistory', history)
  }, [history])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/workout">
          <WorkoutPage results={results} onSelectWorkout={selectWorkout} />
        </Route>
        <Route
          path="/music"
          render={props => (
            <MusicPage
              {...props}
              onCreatePlaylist={createPlaylist}
              selectedWorkout={selectedWorkout}
            />
          )}
        />

        <Route path="/playlist">
          <PlaylistPage
            warmupSongs={warmupSongs}
            intervalsTSongs={intervalsTSongs}
            cooldownSongs={cooldownSongs}
            selectedWorkout={selectedWorkout}
            onSavePlaylist={savePlaylist}
          />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage history={history} />
        </Route>
      </Switch>
      <Footer>
        <Route exact path={['/workout', '/music', '/playlist', '/favorites']}>
          <Navigation />
        </Route>
      </Footer>
    </AppLayout>
  )

  function selectWorkout(workout) {
    const selectedWorkout = results.find(result => result.id === workout.id)
    setSelectedWorkout(selectedWorkout)
  }

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
        roundedTempo(song.tempo) <= rangeMax(newWorkout.warmup.cadence) &&
        song.genre === values.genre
    )

    const shuffledWarmupSongs = allSongsForWarmup.sort(
      () => 0.5 - Math.random()
    )

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

    const allSongsForIntervalsT = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.intervalsT.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.intervalsT.cadence) &&
        song.genre === values.genre
    )

    const shuffledIntervalsTSongs = allSongsForIntervalsT.sort(
      () => 0.5 - Math.random()
    )

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

    const allSongsForCooldown = data.filter(
      song =>
        roundedTempo(song.tempo) >= rangeMin(newWorkout.cooldown.cadence) &&
        roundedTempo(song.tempo) <= rangeMax(newWorkout.cooldown.cadence) &&
        song.genre === values.genre
    )

    const shuffledCooldownSongs = allSongsForCooldown.sort(
      () => 0.5 - Math.random()
    )

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

    push('/playlist')
  }

  function savePlaylist() {
    setHistory([
      {
        selectedWorkout,
        warmupSongs,
        intervalsTSongs,
        cooldownSongs,
        id: uuidv4,
      },
      ...history,
    ])
    push('/favorites')
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
const Footer = styled.footer`
  bottom: 10px;
  left: 0;
  position: fixed;
  right: 0;
`
