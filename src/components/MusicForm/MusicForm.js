import styled from 'styled-components/macro'
import convertEnergy from '../../services/convertEnergy'
import { data } from '../tracksShort.json'
import Button from '../Button'
import Icon from 'supercons'
import { NavLink } from 'react-router-dom'

export default function MusicForm({ onCreatePlaylist }) {
  const energyCategory = Array.from(
    new Set(data.map(({ energy }) => convertEnergy(energy)))
  )

  const genreCategory = Array.from(new Set(data.map(({ genre }) => genre)))

  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <Label>
        Energy
        <SelectInput required name="energy" data-testid="energy-select">
          <option value="">... Please choose an option</option>
          {energyCategory.map(categoryItem => (
            <option data-testid={categoryItem}>{categoryItem}</option>
          ))}
        </SelectInput>
      </Label>

      <Label>
        Genre
        <SelectInput required name="genre" data-testid="genre-select">
          <option value="">... Please choose an option</option>
          {genreCategory.map(categoryItem => (
            <option data-testid={categoryItem}>{categoryItem}</option>
          ))}
        </SelectInput>
      </Label>

      <Button as={NavLink} to={{ pathname: '/playlist' }}>
        {' '}
        Get my Playlist! 
        <Icon glyph="enter" size={24} />{' '}
      </Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { energy, genre } = form.elements

    onCreatePlaylist({
      energy: energy.value,
      genre: genre.value,
    })
    form.reset()
    energy.focus()
  }
}

const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: 10px;
  width: 100%;
`
const Label = styled.label`
  display: grid;
  width: 100%;
`

const SelectInput = styled.select`
  appearance: none;
  font-family: inherit;
  padding: 10px;
  padding-top: 5px;
  font-size: 0.8em;
  width: 100%;
`
