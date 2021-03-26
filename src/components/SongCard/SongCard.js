import styled from 'styled-components/macro'

export default function SongCard({ songInfo }) {
  const { images, artist_name, name, duration_ms } = songInfo

  return (
    <Grid>
      <ImageWrapper>
        <img src={images} alt={artist_name} />
      </ImageWrapper>
      <SongInfo>
        <SongName>{name}</SongName>
        <SongArtist>{artist_name}</SongArtist>
        <SongDuration>{duration_ms}</SongDuration>
      </SongInfo>
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  gap: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 0.8em;
  width: 90%;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 30%;
  vertical-align: middle;
  overflow: hidden;
  padding: 5px;
`

const SongInfo = styled.div`
  width: 70%;
  padding: 5px;
`

const SongName = styled.div``

const SongArtist = styled.div``

const SongDuration = styled.div``
