export default function convertDuration(duration_ms) {
  var seconds = duration_ms / 1000
  var minutes = parseInt(seconds / 60, 10)
  seconds = seconds % 60

  return minutes + ':' + seconds
}
