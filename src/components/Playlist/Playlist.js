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
      <WarmupWrapper>
        <p>Warmup songs:</p>
        {warmupSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </WarmupWrapper>
      <IntervalsTWrapper>
        <p>Interval songs:</p>
        {intervalsTSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </IntervalsTWrapper>
      <CooldownWrapper>
        <p>Cooldown songs:</p>
        {cooldownSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </CooldownWrapper>
    </PlaylistGrid>
  )
}

const PlaylistGrid = styled.section``

const WarmupWrapper = styled.div`
  display: grid;
`

const IntervalsTWrapper = styled.div``

const CooldownWrapper = styled.div``
