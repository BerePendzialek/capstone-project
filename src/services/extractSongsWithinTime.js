export default function extractSongsWithinTime(songs, maxDuration) {
  const MAX_DURATION = maxDuration
  let counterW = 0

  songs.reduce((acc, cur) => {
    if (counterW <= MAX_DURATION) {
      const nextTimeSum = counterW + cur.duration_ms
      if (nextTimeSum <= MAX_DURATION) {
        counterW = counterW + cur.duration_ms
        acc.push(cur)
      }
    }
    return acc
  }, [])
}
