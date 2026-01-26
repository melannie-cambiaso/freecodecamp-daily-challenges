const ranges = [
  { min: 1, max: 15, letter: 'B' },
  { min: 16, max: 30, letter: 'I' },
  { min: 31, max: 45, letter: 'N' },
  { min: 46, max: 60, letter: 'G' },
  { min: 61, max: 75, letter: 'O' }
]

function getBingoLetter(n) {
  const search = ranges.find(el => n >= el.min && n <= el.max)
  return search ? search.letter : null;
}

// Examples:
console.log(getBingoLetter(75)); // should return "O"
console.log(getBingoLetter(54)); // should return "G"
console.log(getBingoLetter(25)); // should return "I"
console.log(getBingoLetter(38)); // should return "N"
console.log(getBingoLetter(11)); // should return "B"