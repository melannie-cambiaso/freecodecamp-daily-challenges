function groundhogDayPrediction(appearance) {
  if (appearance === true) return "Looks like we'll have six more weeks of winter."

  if (appearance === false) return "It's going to be an early spring."
  
  return "No prediction this year.";
}

console.log(groundhogDayPrediction(true)); // should return "Looks like we'll have six more weeks of winter."
console.log(groundhogDayPrediction(false)); // should return "It's going to be an early spring."
console.log(groundhogDayPrediction(null)); // should return "No prediction this year."
console.log(groundhogDayPrediction(" ")); // should return "No prediction this year."
console.log(groundhogDayPrediction("true")); // should return "No prediction this year."