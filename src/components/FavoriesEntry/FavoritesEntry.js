import styled from 'styled-components/macro'
import SongCard from '../SongCard/SongCard'
import {
  ShowFormatWarmup,
  ShowFormatIntervalsT,
  ShowFormatCooldown,
} from '../../services/ShowFormatFromSections'
import { selectColor, selectColorByInterval } from '../../services/selectColor'

export default function FavoritesEntry({
  selectedWorkout,
  warmupSongs,
  intervalsTSongs,
  cooldownSongs,
}) {
  const { name, warmup, intervalsT, cooldown } = selectedWorkout
  return (
    <EntryGrid>
      <Title>{name}</Title>
      <WarmupSection background={selectColor(warmup.powerHigh)}>
        <ShowFormatWarmup warmup={warmup} />
      </WarmupSection>
      <SectionWrapper>
        {warmupSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>

      <IntervalsTSection background={selectColorByInterval(intervalsT.onPower)}>
        <ShowFormatIntervalsT intervalsT={intervalsT} />
      </IntervalsTSection>
      <SectionWrapper>
        {intervalsTSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
      <CooldownSection background={selectColor(cooldown.powerHigh)}>
        <ShowFormatCooldown cooldown={cooldown} />
      </CooldownSection>
      <SectionWrapper>
        {cooldownSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
    </EntryGrid>
  )
}

const EntryGrid = styled.section`
  display: grid;
  gap: 20px;
  padding: 10px;
  background: var(--color-white-smoked);
  border: 1px solid var(--color-lila-light);
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  color: var(--color-dark-grey);
`

const Title = styled.h4`
  margin: 15px 5px 0 5px;
  text-align: justify;
  padding: 2px;
`

const SectionWrapper = styled.div`
  display: grid;
`

const WarmupSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9em;
`

const IntervalsTSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  border-radius: 5px;
  font-size: 0.9em;
`

const CooldownSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  border-radius: 5px;
  font-size: 0.9em;
`
