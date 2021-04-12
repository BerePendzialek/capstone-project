export default function shuffledSongs(allSongs) {
  allSongs.sort(() => 0.5 - Math.random())
}
