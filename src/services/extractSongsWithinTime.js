export default function extractSongsWithinTime(songs, maxDuration) {
  const MAX_DURATION = maxDuration
  let counter = 0

  const selectedSongs = songs.reduce((acc, cur) => {
    if (counter <= MAX_DURATION) {
      const nextTimeSum = counter + cur.duration_ms
      if (nextTimeSum <= MAX_DURATION) {
        counter = counter + cur.duration_ms
        acc.push(cur)
      }
    }
    return acc
  }, [])

  return selectedSongs
}
