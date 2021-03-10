import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function WorkoutCard({ results }) {
  return (
    <WorkoutCardGrid>
      <WorkoutCardTitle>{results.Name}</WorkoutCardTitle>
      <WorkoutWrapper>
        <WorkoutDescription>
          Description: {results.Description} <br />
          <br />
          Total duration: {results.TotalDuration}
          <br />
        </WorkoutDescription>
        <WarmUpSection>
          {results.Warmup.Duration}min from {results.Warmup.PowerLow} to{' '}
          {results.Warmup.PowerHigh}W at {results.Warmup.Cadence}rpm
        </WarmUpSection>
        <MainSection>
          {' '}
          {results.IntervalsT.Repeat}x {results.IntervalsT.OnDuration}min @{' '}
          {results.IntervalsT.Cadence}rpm, {results.IntervalsT.OnPower}W, <br />
          {results.IntervalsT.OffDuration}min @ {results.intervalCadenceResting}
          rpm, {results.IntervalsT.OffPower}W{' '}
        </MainSection>
        <CooldownSection>
          {results.Cooldown.Duration}min from {results.Cooldown.PowerLow} to{' '}
          {results.Cooldown.PowerHigh}W at {results.Cooldown.Cadence}rpm
        </CooldownSection>
      </WorkoutWrapper>
    </WorkoutCardGrid>
  )
}

WorkoutCard.propTypes = {
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  TotalDuration: PropTypes.number.isRequired,
}

const WorkoutCardGrid = styled.section`
  display: grid;
  gap: 5px;
  padding: 20px;
  border-radius: 5px;
  background: #cad7f6;
  width: 100%;
`

const WorkoutCardTitle = styled.h3`
  text-align: justify;
`

const WorkoutDescription = styled.div`
  text-align: left;
  border: 2px solid lightgray;
  padding: 5px;
`

const WorkoutWrapper = styled.section`
  display: grid;
  gap: 10px;
`

const WarmUpSection = styled.div`
  text-align: right;
  background: lightblue;
  padding: 5px;
`

const MainSection = styled.div`
  text-align: right;
  background: royalblue;
  padding: 5px;
`

const CooldownSection = styled.div`
  text-align: right;
  background: lightskyblue;
  padding: 5px;
`
