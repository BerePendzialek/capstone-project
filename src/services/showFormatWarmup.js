export default function showFormatWarmup({ warmup }) {
  return `${warmup.duration}min from ${warmup.powerLow} to 
  ${warmup.powerHigh}W at ${warmup.cadence}rpm`
}
