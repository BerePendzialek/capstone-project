export default function setEnergy(energy) {
  var setEnergy
  if (energy <= 0.699) {
    setEnergy = 'Relax'
  } else {
    setEnergy = 'More Power'
  }
  return setEnergy
}
