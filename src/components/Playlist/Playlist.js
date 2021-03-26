import styled from 'styled-components/macro'

export default function Playlist() {
  return (
    <PlaylistGrid>
      <WarmupWrapper>
        <p>Warmup songs:</p>
      </WarmupWrapper>
      <IntervalsTWrapper>
        <p>Interval songs:</p>
      </IntervalsTWrapper>
      <CooldownWrapper>
        <p>Cooldown songs:</p>
      </CooldownWrapper>
    </PlaylistGrid>
  )
}

const PlaylistGrid = styled.section``

const WarmupWrapper = styled.div``

const IntervalsTWrapper = styled.div``

const CooldownWrapper = styled.div``
