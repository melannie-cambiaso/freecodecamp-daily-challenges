function findPawnMoves(position) {
  let moves = [];
  const letter = position[0];
  const num = position[1];
  if (num === '2') {
    moves.push(`${letter}${Number(num) + 1}`);
    moves.push(`${letter}${Number(num) + 2}`);
  } else {
    moves.push(`${letter}${Number(num) + 1}`);
  }
  return moves;
}

console.log(findPawnMoves('D4')); // should return ["D5"]
console.log(findPawnMoves('B2')); // should return ["B3", "B4"]
console.log(findPawnMoves('A7')); // should return ["A8"]
console.log(findPawnMoves('G2')); // should return ["G3", "G4"]
console.log(findPawnMoves('E3')); // should return ["E4"]
