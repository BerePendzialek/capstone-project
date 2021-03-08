import styled from 'styled-components/macro'

export default function WorkoutCard() {
  return (
    <WorkoutCardGrid>
      <WorkoutCardTitle>On FTP-Light</WorkoutCardTitle>
      <WorkoutWrapper>
        Warmup <br />
        <WarmUpSection>XXmin from XX to XXW </WarmUpSection>
        Main <br />
        <MainSection>XXmin from XX to XXW </MainSection>
        Cooldown <br />
        <CooldownSection>XXmin from XX to XXW </CooldownSection>
      </WorkoutWrapper>
    </WorkoutCardGrid>
  )
}

const WorkoutCardGrid = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
  border-radius: 4px;
  background: lightgray;
  width: 100%;
`

const WorkoutCardTitle = styled.h3`
  text-align: left;
`

const WorkoutWrapper = styled.section`
  text-align: left;
  display: grid;
  gap: 10px;
`

const WarmUpSection = styled.div`
  background: lightblue;
  padding: 5px;
`

const MainSection = styled.div`
  background: royalblue;
  padding: 5px;
`

const CooldownSection = styled.div`
  background: lightskyblue;
  padding: 5px;
`
