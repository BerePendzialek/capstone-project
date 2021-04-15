import roundedTempo from './roundedTempo'
import { rangeMin, rangeMax } from './cadenceRange'

export default function filterAllSongsForSection(
  generalSongs,
  cadence,
  values
) {
  const allSongsForSection = generalSongs.filter(
    song =>
      roundedTempo(song.tempo) >= rangeMin(cadence) &&
      roundedTempo(song.tempo) <= rangeMax(cadence) &&
      song.genre === values.genre
  )
  return allSongsForSection
}
