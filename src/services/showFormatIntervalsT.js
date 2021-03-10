export default function showFormatIntervalsT({ intervalsT }) {
  return `${intervalsT.repeat}x ${intervalsT.onDuration}min @
          ${intervalsT.cadence}rpm, ${intervalsT.onPower}W,
          ${intervalsT.offDuration}min @ ${intervalsT.cadenceResting}
          rpm, ${intervalsT.offPower}W`
}
