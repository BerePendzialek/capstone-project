import styled from 'styled-components/macro'
//import SongCard from '../SongCard/SongCard'

export default function Playlist(
  playlist,
  warmupSongs,
  intervalsTSongs,
  cooldownSongs
) {
  return (
    <PlaylistGrid playlist={playlist}>
      <WarmupWrapper warmupSongs={warmupSongs}>
        <p>Warmup songs:</p>
        {/* {playlist.map(playlist => (
          <SongCard songInfo={playlist} />
        ))} */}
      </WarmupWrapper>
      <IntervalsTWrapper intervalsTSongs={intervalsTSongs}>
        <p>Interval songs:</p>
      </IntervalsTWrapper>
      <CooldownWrapper cooldownSongs={cooldownSongs}>
        <p>Cooldown songs:</p>
      </CooldownWrapper>
    </PlaylistGrid>
  )
}

const PlaylistGrid = styled.section``

const WarmupWrapper = styled.div``

const IntervalsTWrapper = styled.div``

const CooldownWrapper = styled.div``
