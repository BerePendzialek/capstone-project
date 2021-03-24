export default function convertTempoToCadence(tempo) {
  const songTempo = tempo
  const songCadence = Math.floor(songTempo / 2)

  return songCadence
}
