export default function showFormatIntervalsT({ intervalsT }) {
  const {
    repeat,
    onDuration,
    cadence,
    onPower,
    offDuration,
    cadenceResting,
    offPower,
  } = intervalsT
  return `${repeat}x ${onDuration}min @
          ${cadence}rpm, ${onPower}W,
          ${offDuration}min @ ${cadenceResting}
          rpm, ${offPower}W`
}
