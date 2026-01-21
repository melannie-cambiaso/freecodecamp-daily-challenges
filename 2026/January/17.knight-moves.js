const positions = {
  up: [2, 1],
  upLeft: [2, -1],
  down: [-2, 1],
  downLeft: [-2, -1],
  right: [1, 2],
  left: [-1, 2],
  rightDown: [1, -2],
  leftDown: [-1, -2],
};
const cols = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
];
function knightMoves(position) {
  const col = cols.findIndex(
    el => el === position[0]
  );
  const row = parseInt(position[1]);
  let count = 0;
  for (const [_key, pos] of Object.entries(
    positions
  )) {
    if (
      row + pos[0] <= 8 &&
      row + pos[0] > 0 &&
      col + pos[1] < 8 &&
      col + pos[1] >= 0
    ) {
      count++;
    }
  }
  return count;
}

// Turn into examples
console.log(knightMoves('A1')); // should return 2
console.log(knightMoves('D4')); // should return 8
console.log(knightMoves('G6')); // should return 6
console.log(knightMoves('B8')); // should return 3
console.log(knightMoves('H3')); // should return 4
