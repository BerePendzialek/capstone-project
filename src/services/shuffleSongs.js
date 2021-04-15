export default function shuffleSongs(allSongs) {
  return allSongs.sort(() => 0.5 - Math.random())
}
