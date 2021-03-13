export default function colorSections({ warmup }) {
  const { powerHigh } = warmup
  let colorS

  if ({ powerHigh } <= 60) {
    colorS = 'grey'
  } else if ({ powerHigh } > 61 && { powerHigh } <= 150) {
    colorS = 'blue'
  } else {
    colorS = 'red'
  }

  return colorS
}
