export { selectColor, selectColorByInterval }

function selectColor(value) {
  let selectColor
  if (value <= 60) {
    selectColor = 'var(--color-grey-rampDown)'
  } else if (value >= 61 && value <= 150) {
    selectColor = 'var(--color-blue-rampUp)'
  } else if (value >= 151 && value <= 179) {
    selectColor = 'var(--color-green)'
  } else if (value >= 180 && value <= 208) {
    selectColor = 'var(--color-yellow)'
  } else if (value >= 209 && value <= 226) {
    selectColor = 'var(--color-orange)'
  } else {
    selectColor = 'var(--color-red)'
  }
  return selectColor
}

function selectColorByInterval(value) {
  let selectColorByInterval
  if (value <= 60) {
    selectColorByInterval = 'var(--color-grey)'
  } else if (value >= 61 && value <= 150) {
    selectColorByInterval = 'var(--color-blue-interval)'
  } else if (value >= 151 && value <= 179) {
    selectColorByInterval = 'var(--color-green-interval)'
  } else if (value >= 180 && value <= 208) {
    selectColorByInterval = 'var(--color-yellow-interval)'
  } else if (value >= 209 && value <= 226) {
    selectColorByInterval = 'var(--color-orange)'
  } else {
    selectColorByInterval = 'var(--color-red)'
  }
  return selectColorByInterval
}
