import styled from 'styled-components/macro'
import SongCard from '../SongCard/SongCard'

export default function Playlist({
  playlist,
  warmupSongs,
  intervalsTSongs,
  cooldownSongs,
}) {
  return (
    <PlaylistGrid>
      <SectionWrapper>
        <p>Warmup songs:</p>
        {warmupSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <p>Interval songs:</p>
        {intervalsTSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <p>Cooldown songs:</p>
        {cooldownSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
    </PlaylistGrid>
  )
}

const PlaylistGrid = styled.section`
  display: grid;
`

const SectionWrapper = styled.div`
  display: grid;
`
