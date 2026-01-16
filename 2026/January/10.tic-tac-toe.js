function ticTacToe(board) {
  let movements = [
    [0,0, 0,1, 0,2],
    [1,0, 1,1, 1,2],
    [2,0, 2,1, 2,2],
    [0,0, 1,0, 2,0],
    [0,1, 1,1, 2,1],
    [0,2, 1,2, 2,2],
    [0,0, 1,1, 2,2],
    [0,2, 1,1, 2,0],
  ];
  let result = 'Draw'
  for (const movement of movements) {
    let count = 0;
    let tempArray = []
    while (count < movements[0].length) {
      const first = movement[count]
      const second = movement[count + 1]
      tempArray.push(board[first][second])
      count = count + 2
    }
    if (tempArray.every((el) => el === 'X') || tempArray.every((el) => el === 'O')) {
      result = `${tempArray[0]} wins`
      break;
    }
  }
  return result;
}

// Test cases
console.log(ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]])) // "X wins"
console.log(ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]])) // "O wins"
console.log(ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]])) // "Draw"
console.log(ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]])) // "O wins"
console.log(ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]])) // "X wins"
console.log(ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]])) // "Draw"