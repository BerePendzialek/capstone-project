export default function convertEnergy(energy) {
  let energyCategory
  if (energy <= 0.699) {
    energyCategory = 'High'
  } else {
    energyCategory = 'Middle'
  }
  return energyCategory
}
