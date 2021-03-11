export default function showFormatCooldown({ cooldown }) {
  const { duration, powerLow, powerHigh, cadence } = cooldown
  return `${duration}min from ${powerLow} to 
  ${powerHigh}W at ${cadence}rpm`
}
