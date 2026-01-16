function golfScore(par, strokes) {
  if (strokes === 1) {
    return 'Hole in one!';
  }

  if (strokes === par) return 'Par';
  const result = par - strokes;

  if (result === 1) return 'Birdie';
  if (result === 2) return 'Eagle';
  if (result === -1) return 'Bogey';

  return 'Double bogey';
}

console.log(golfScore(3, 3)); // "Par"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(3, 1)); // "Hole in one!"
console.log(golfScore(5, 7)); // "Double bogey"
console.log(golfScore(4, 5)); // "Bogey"
console.log(golfScore(5, 3)); // "Eagle"
