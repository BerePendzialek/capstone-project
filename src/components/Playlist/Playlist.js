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

const PlaylistGrid = styled.section`
  display: grid;
`

const WarmupWrapper = styled.div`
  display: grid;
`

const IntervalsTWrapper = styled.div`
  display: grid;
`

const CooldownWrapper = styled.div`
  display: grid;
`
