function getNumberOfPlants(fieldSize, unit, crop) {
  const units = {
    "acres": 4046.86,
    "hectares": 10000
  }
  const crops = {
    "corn": 1,
    "wheat": 0.1,
    "soybeans": 0.5,
    "tomatoes": 0.25,
    "lettuce": 0.2,
  }
  const total = fieldSize * units[unit]
  const space = crops[crop];
  return parseInt(total / space)
}

console.log(getNumberOfPlants(1, "acres", "corn")); // should return 4046
console.log(getNumberOfPlants(2, "hectares", "lettuce")); // should return 100000
console.log(getNumberOfPlants(20, "acres", "soybeans")); // should return 161874
console.log(getNumberOfPlants(3.75, "hectares", "tomatoes")); // should return 150000
console.log(getNumberOfPlants(16.75, "acres", "tomatoes")); // should return 271139