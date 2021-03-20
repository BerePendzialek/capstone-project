import styled from 'styled-components/macro'
import setEnergy from '../../services/setEnergy'
import { data } from '../tracksShort.json'

export default function MusicForm({ onCreatePlaylist }) {
  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <Label>
        Energy
        <SelectInput required name="energy" data-testid="energy-select">
          <option value="">... Please choose an option</option>
          {data.map(({ energy, track_id }) => (
            <option key={track_id} data-testid={setEnergy(energy)}>
              {setEnergy(energy)}{' '}
            </option>
          ))}
        </SelectInput>
      </Label>

      <Label>
        Genre
        <SelectInput name="genre" data-testid="genre-select">
          <option value="">... Please choose an option</option>
          {data.map(({ genre, track_id }) => (
            <option key={track_id} data-testid={genre}>
              {genre}{' '}
            </option>
          ))}
        </SelectInput>
      </Label>
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
