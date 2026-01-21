function compareEnergy(
  caloriesBurned,
  wattHoursUsed
) {
  const convertedCalories = caloriesBurned * 4184;
  const convertedWatt = wattHoursUsed * 3600;

  if (convertedCalories > convertedWatt)
    return 'Workout';

  if (convertedCalories < convertedWatt)
    return 'Devices';

  return 'Equal';
}

// Example test cases
console.log(compareEnergy(250, 50)); // should return "Workout"
console.log(compareEnergy(100, 200)); // should return "Devices"
console.log(compareEnergy(450, 523)); // should return "Equal"
console.log(compareEnergy(300, 75)); // should return "Workout"
console.log(compareEnergy(200, 250)); // should return "Devices"
console.log(compareEnergy(900, 1046)); // should return "Equal"
