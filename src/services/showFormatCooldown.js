export default function showFormatCooldown({ cooldown }) {
  return `${cooldown.duration}min from ${cooldown.powerLow} to 
  ${cooldown.powerHigh}W at ${cooldown.cadence}rpm`
}
