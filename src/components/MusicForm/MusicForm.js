import styled from 'styled-components/macro'
import convertEnergy from '../../services/convertEnergy'
import data from '../tracksShort.json'
import Button from '../Button'

import { useHistory } from 'react-router-dom'

export default function MusicForm({ onCreatePlaylist, workout }) {
  const { push } = useHistory()
  const energyCategory = Array.from(
    new Set(data.map(({ energy }) => convertEnergy(energy)))
  )
  const genreCategory = Array.from(new Set(data.map(({ genre }) => genre)))

  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <Label>
        Energy Level
        <SelectInput required name="energy" data-testid="energy-select">
          <option value="">Please choose an option... </option>
          {energyCategory.map(categoryItem => (
            <option data-testid={categoryItem}>{categoryItem}</option>
          ))}
        </SelectInput>
      </Label>

      <Label>
        Genre
        <SelectInput required name="genre" data-testid="genre-select">
          <option value="">Please choose an option...</option>
          {genreCategory.map(categoryItem => (
            <option data-testid={categoryItem}>{categoryItem}</option>
          ))}
        </SelectInput>
      </Label>
      <PlaylistButton>Get my Playlist! </PlaylistButton>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { energy, genre } = form.elements

    onCreatePlaylist(
      {
        energy: energy.value,
        genre: genre.value,
      },
      workout
    )
    form.reset()
    energy.focus()
    push('/playlist')
  }
}

const Form = styled.form`
  display: grid;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
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
  font-size: 0.9em;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  background: var(--color-white-smoked);
  color: var(--color-grey);
  margin-bottom: 20px;
`
const PlaylistButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`
