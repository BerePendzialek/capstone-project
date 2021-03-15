export { ShowFormatWarmup, ShowFormatIntervalsT, ShowFormatCooldown }

function ShowFormatWarmup({ warmup }) {
  const { duration, powerLow, powerHigh, cadence } = warmup
  return (
    <div>
      {duration}min from {powerLow} to
      {powerHigh}W at {cadence}rpm
    </div>
  )
}

function ShowFormatIntervalsT({ intervalsT }) {
  const {
    repeat,
    onDuration,
    cadence,
    onPower,
    offDuration,
    cadenceResting,
    offPower,
  } = intervalsT

  return (
    <div>
      {repeat}x {onDuration}min @{cadence}rpm, {onPower}W,
      <br />
      {offDuration}min @ {cadenceResting}
      rpm, {offPower}W
    </div>
  )
}

function ShowFormatCooldown({ cooldown }) {
  const { duration, powerLow, powerHigh, cadence } = cooldown
  return (
    <div>
      {duration}min from {powerLow} to
      {powerHigh}W at {cadence}rpm`
    </div>
  )
}
