const ranges = [
  { min: 97, max: 100, score: "A+" },
  { min: 93, max: 96, score: "A" },
  { min: 90, max: 92, score: "A-" },
  { min: 87, max: 89, score: "B+" },
  { min: 83, max: 86, score: "B" },
  { min: 80, max: 82, score: "B-" },
  { min: 77, max: 79, score: "C+" },
  { min: 73, max: 76, score: "C" },
  { min: 70, max: 72, score: "C-" },
  { min: 67, max: 69, score: "D+" },
  { min: 63, max: 66, score: "D" },
  { min: 60, max: 62, score: "D-" },
  { min: 0, max: 59, score: "F" }
];

function getAverageGrade(scores) {
  const average = Math.floor(scores.reduce((curr, next) => curr + next, 0) /scores.length);
  let score = ''
  for (const range of ranges) {
    if (average >= range.min && average <= range.max) {
      score = range.score;
    }
  }
  return score;
}

console.log(getAverageGrade([92, 91, 90, 94, 89, 93])); // should return "A-"
console.log(getAverageGrade([84, 89, 85, 100, 91, 88, 79])); // should return "B+"
console.log(getAverageGrade([63, 69, 65, 66, 71, 64, 65])); // should return "D"
console.log(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100])); // should return "A+"
console.log(getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60])); // should return "C+"
console.log(getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59])); // should return "F"