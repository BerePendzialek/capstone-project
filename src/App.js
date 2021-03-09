import WorkoutCard from './components/WorkoutCard'
import React from 'react'
import styled from 'styled-components/macro'
import { results } from './staticWorkoutList.json'

export default function App() {
  return (
    <AppLayout>
      <h2> Select your workout:</h2>
      {results.map(
        ({
          Name,
          Description,
          TotalDuration,
          Warmup,
          Cooldown,
          IntervalsT,
        }) => (
          <WorkoutCard
            name={Name}
            description={Description}
            totalDuration={TotalDuration}
            warmupDuration={Warmup.Duration}
            warmupPowerLow={Warmup.PowerLow}
            warmupPowerHigh={Warmup.PowerHigh}
            warmupCadence={Warmup.Cadence}
            cooldownDuration={Cooldown.Duration}
            cooldownPowerLow={Cooldown.PowerLow}
            cooldownPowerHigh={Cooldown.PowerHigh}
            cooldownCadence={Cooldown.Cadence}
            repetitions={IntervalsT.Repeat}
            onDuration={IntervalsT.OnDuration}
            intervalCadence={IntervalsT.Cadence}
            onPower={IntervalsT.OnPower}
            offDuration={IntervalsT.OffDuration}
            intervalCadenceResting={IntervalsT.CadenceResting}
            offPower={IntervalsT.OffPower}
          />
        )
      )}
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  padding: 2px;
  gap: 10px;
  overflow-y: scroll;
`
