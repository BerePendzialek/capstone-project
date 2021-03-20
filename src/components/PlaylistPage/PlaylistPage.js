import styled from 'styled-components/macro'
import Button from '../Button'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'

export default function PlaylistPage() {
  return (
    <Grid>
      <Heading>Your playlist:</Heading>
      Under construction!
      <BackButton as={NavLink} to={{ pathname: '/music' }}>
        <Icon glyph="back" size={24} />
        Back
      </BackButton>
      <BackButton as={NavLink} to={{ pathname: '/' }}>
        <Icon glyph="home" size={24} />
        Start new
      </BackButton>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
`

const Heading = styled.h2`
  font-family: 'Tahoma';
  font-weight: 600;
  text-transform: uppercase;
  -webkit-text-stroke: 0.1rem currentcolor;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  display: inline-block;
`

const BackButton = styled(Button)`
  width: 50%;
`
