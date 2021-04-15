import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import WorkoutPage from '../WorkoutPage'
import MusicPage from '../MusicPage'
import PlaylistPage from '../PlaylistPage'
import data from '../tracksShort.json'
import convertCadenceTempo from '../../services/convertCadenceTempo'
import { results } from '../staticWorkoutList.json'
import Navigation from '../Navigation/Navigation'
import HomePage from '../HomePage/HomePage'
import FavoritesPage from '../FavoritesPage'
import { v4 as uuidv4 } from 'uuid'
import shuffleSongs from '../../services/shuffleSongs'
import extractSongsWithinTime from '../../services/extractSongsWithinTime'
import useLocalStorage from '../../hooks/useLocalStorage'
import filterAllSongsForSection from '../../services/filterAllSongsForSection'

export default function App() {
  const { push } = useHistory()
  const [selectedWorkout, setSelectedWorkout] = useState({})
  const [warmupSongs, setWarmupSongs] = useState([])
  const [intervalsTSongs, setIntervalsTSongs] = useState([])
  const [cooldownSongs, setCooldownSongs] = useState([])
  const [history, setHistory] = useLocalStorage('playlistHistory', [])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/workout">
          <WorkoutPage results={results} onSelectWorkout={selectWorkout} />
        </Route>
        <Route path="/music">
          <MusicPage
            onCreatePlaylist={createPlaylist}
            selectedWorkout={selectedWorkout}
          />
        </Route>

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

    const allSongsForWarmup = filterAllSongsForSection(
      data,
      newWorkout.warmup.cadence,
      values
    )
    const shuffledWarmupSongs = shuffleSongs(allSongsForWarmup)
    const warmupSongsTotal = extractSongsWithinTime(
      shuffledWarmupSongs,
      workout.warmup.duration_ms
    )

    const allSongsForIntervalsT = filterAllSongsForSection(
      data,
      newWorkout.intervalsT.cadence,
      values
    )
    const shuffledIntervalsTSongs = shuffleSongs(allSongsForIntervalsT)
    const intervalsTSongsTotal = extractSongsWithinTime(
      shuffledIntervalsTSongs,
      workout.intervalsT.total_interval_duration_ms
    )

    const allSongsForCooldown = filterAllSongsForSection(
      data,
      newWorkout.cooldown.cadence,
      values
    )
    const shuffledCooldownSongs = shuffleSongs(allSongsForCooldown)
    const cooldownSongsTotal = extractSongsWithinTime(
      shuffledCooldownSongs,
      workout.cooldown.duration_ms
    )

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
  gap: 10px;
  overflow-y: scroll;
  scroll-behavior: smooth;
`
const Footer = styled.footer`
  bottom: 10px;
  left: 0;
  position: fixed;
  right: 0;
`
