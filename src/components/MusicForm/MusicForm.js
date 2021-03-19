import styled from 'styled-components/macro'
import Button from '../Button'

export default function MusicForm() {
  return (
    <Form>
      <Label>
        Energy
        <SelectInput name="energy" id="energy-select">
          <option value="relax">Chill</option>
          <option value="hard">More Power</option>
        </SelectInput>
      </Label>

      <Label>
        Genre
        <SelectInput name="genre" id="genre-select">
          <option value="alternative-rock">Alternative Rock</option>
          <option value="latin">Latin</option>
        </SelectInput>
      </Label>
      <Button>Get my Playlist! </Button>
    </Form>
  )
}

const Form = styled.form`
  display: grid;
`

const SelectInput = styled.select`
  border: 1px solid green;
`
const Label = styled.label`
  background: gray;
`
