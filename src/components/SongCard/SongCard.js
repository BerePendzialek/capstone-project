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
        {artist_name}
        <SongDuration>{prettyMilliseconds(duration)}</SongDuration>
      </SongInfo>
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  gap: 20px;
  border: 1px solid var(--color-lila-light);
  font-size: 0.8em;
  width: 100%;
  height: 75px;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 5px;
`

const ImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  vertical-align: middle;
  overflow: hidden;
  padding: 5px;

  img {
    overflow: hidden;
    margin-bottom: 5px;
  }
`

const SongInfo = styled.div`
  width: 70%;
  padding: 10px;
`

const SongName = styled.div`
  color: var(--color-lila);
`

const SongDuration = styled.div`
  color: var(--color-dark-grey);
`
