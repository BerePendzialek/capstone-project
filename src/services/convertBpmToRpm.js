export default function convertBpmToRpm(tempo) {
  const songBmp = tempo
  const songRpm = Math.floor(songBmp / 2)

  return songRpm
}
