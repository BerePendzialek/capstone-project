import styled from 'styled-components/macro'
import prettyMilliseconds from 'pretty-ms'

export default function SongCard({ songInfo }) {
  const { images, artist_name, name, duration_ms } = songInfo
  const duration = duration_ms
  return (
    <Grid>
      <ImageWrapper>
        <img src={images} alt={artist_name} />
      </ImageWrapper>
      <SongInfo>
        <SongName>{name}</SongName>
        <SongArtist>{artist_name}</SongArtist>
        <SongDuration>{prettyMilliseconds(duration)}</SongDuration>
      </SongInfo>
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  gap: 20px;
  border: 1px solid gray;

  font-size: 0.8em;
  width: 100%;
  height: 64px;
  align-items: center;
  margin-bottom: 5px;
  overflow: hidden;
`

const ImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  vertical-align: middle;
  overflow: hidden;
  padding: 0px;

  img {
    overflow: hidden;
    margin-bottom: 0px;
  }
`

const SongInfo = styled.div`
  width: 70%;
  padding: 5px;
`

const SongName = styled.div`
  color: #ee7203;
`

const SongArtist = styled.div``

const SongDuration = styled.div`
  color: #7a8495;
`
