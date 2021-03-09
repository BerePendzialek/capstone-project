import styled from 'styled-components/macro'

export default function WorkoutCard({
  name,
  description,
  totalDuration,
  warmupDuration,
  warmupPowerLow,
  warmupPowerHigh,
  warmupCadence,
  cooldownDuration,
  cooldownPowerLow,
  cooldownPowerHigh,
  cooldownCadence,
  repetitions,
  onDuration,
  intervalCadence,
  onPower,
  offDuration,
  intervalCadenceResting,
  offPower,
}) {
  return (
    <WorkoutCardGrid>
      <WorkoutCardTitle>{name}</WorkoutCardTitle>
      <WorkoutWrapper>
        <WorkoutDescription>
          Description: {description} <br />
          <br />
          Total duration: {totalDuration}
          <br />
        </WorkoutDescription>
        <WarmUpSection>
          {warmupDuration}min from {warmupPowerLow} to {warmupPowerHigh}W at{' '}
          {warmupCadence}rpm
        </WarmUpSection>
        <MainSection>
          {' '}
          {repetitions}x {onDuration}min @ {intervalCadence}rpm, {onPower}W,{' '}
          <br />
          {offDuration}min @ {intervalCadenceResting}rpm, {offPower}W{' '}
        </MainSection>
        <CooldownSection>
          {cooldownDuration}min from {cooldownPowerLow} to {cooldownPowerHigh}W
          at {cooldownCadence}rpm
        </CooldownSection>
      </WorkoutWrapper>
    </WorkoutCardGrid>
  )
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
