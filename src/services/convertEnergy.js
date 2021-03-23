export default function convertEnergy(energy) {
  var energyCategory
  if (energy <= 0.699) {
    energyCategory = 'Relax'
  } else {
    energyCategory = 'More Power'
  }
  return energyCategory
}
