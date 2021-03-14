export { colorSection, colorSectionInterval }

function colorSection(value) {
  let colorSection
  if (value <= 60) {
    colorSection = 'var(--color-grey-rampDown)'
  } else if (value >= 61 && value <= 150) {
    colorSection = 'var(--color-blue-rampUp)'
  } else if (value >= 151 && value <= 179) {
    colorSection = 'var(--color-green)'
  } else if (value >= 180 && value <= 208) {
    colorSection = 'var(--color-yellow)'
  } else if (value >= 209 && value <= 226) {
    colorSection = 'var(--color-orange)'
  } else {
    colorSection = 'var(--color-red)'
  }
  return colorSection
}

function colorSectionInterval(value) {
  let colorSectionInterval
  if (value <= 60) {
    colorSectionInterval = 'var(--color-grey)'
  } else if (value >= 61 && value <= 150) {
    colorSectionInterval = 'var(--color-blue)'
  } else if (value >= 151 && value <= 179) {
    colorSectionInterval = 'var(--color-green)'
  } else if (value >= 180 && value <= 208) {
    colorSectionInterval = 'var(--color-yellow-interval)'
  } else if (value >= 209 && value <= 226) {
    colorSectionInterval = 'var(--color-orange)'
  } else {
    colorSectionInterval = 'var(--color-red)'
  }
  return colorSectionInterval
}
