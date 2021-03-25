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
  border: 2px solid gray;
`

const ImageWrapper = styled.div`
  width: 25%;
`

const SongInfo = styled.div`
  width: 75%;
`

const SongName = styled.div``

const SongArtist = styled.div``

const SongDuration = styled.div``
