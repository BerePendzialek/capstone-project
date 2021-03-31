import styled from 'styled-components/macro'
import SongCard from '../SongCard/SongCard'
import {
  ShowFormatWarmup,
  ShowFormatIntervalsT,
  ShowFormatCooldown,
} from '../WorkoutCard/ShowFormatFromSections'
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
      <Title>Your selected workout: {name}</Title>{' '}
      <WarmupSection background={selectColor(warmup.powerHigh)}>
        <ShowFormatWarmup warmup={warmup} />
      </WarmupSection>
      <SectionWrapper>
        <p>Warmup songs:</p>
        {warmupSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
      <IntervalsTSection background={selectColorByInterval(intervalsT.onPower)}>
        <ShowFormatIntervalsT intervalsT={intervalsT} />
      </IntervalsTSection>
      <SectionWrapper>
        <p>Interval songs:</p>
        {intervalsTSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
      <CooldownSection background={selectColor(cooldown.powerHigh)}>
        <ShowFormatCooldown cooldown={cooldown} />
      </CooldownSection>
      <SectionWrapper>
        <p>Cooldown songs:</p>
        {cooldownSongs.map(songInfo => (
          <SongCard songInfo={songInfo} />
        ))}
      </SectionWrapper>
    </EntryGrid>
  )
}

const EntryGrid = styled.section`
  display: grid;
  gap: 10px;
  border: 2px solid gray;
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
`

const IntervalsTSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  border-radius: 5px;
`

const CooldownSection = styled.section`
  text-align: right;
  background: ${props => props.background};
  padding: 5px;
  margin-top: 2px;
  margin-bottom: 25px;
  border-radius: 5px;
`
