export { rangeMin, rangeMax }

function rangeMin(sectionCadence) {
  const sectionRangeMin = sectionCadence - 10
  return sectionRangeMin
}

function rangeMax(sectionCadence) {
  const sectionRangeMin = sectionCadence + 10
  return sectionRangeMin
}
