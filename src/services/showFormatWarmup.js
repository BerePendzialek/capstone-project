export default function showFormatWarmup({ warmup }) {
  const { duration, powerLow, powerHigh, cadence } = warmup
  return `${duration}min from ${powerLow} to 
  ${powerHigh}W at ${cadence}rpm`
}
