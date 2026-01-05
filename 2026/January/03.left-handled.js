// Left-Handed Seat at the Table
// Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

// A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
// In the given matrix:

// An "R" is a seat occupied by a right-handed person.
// An "L" is a seat occupied by a left-handed person.
// An "U" is an unoccupied seat.
// Only unoccupied seats are available to sit at.
// The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
// Corner seats only have one seat next to them.
// For example, in the given matrix:

function findLeftHandedSeats(table) {
  let count = 0;
  let tempTable = [...table]

  for (let row = 0; row < tempTable.length; row++) {
    for (let col = 0; col < tempTable[row].length; col++) {
      const currentSeat = tempTable[row][col]
      if (currentSeat === 'U') {
        if (row === 1) {
          const leftSide = col - 1;
          if (leftSide === -1) {
            tempTable[row][col] = 'L'
            count++
            continue;
          }
          if (tempTable[row][leftSide] !== 'R') {
            tempTable[row][col] = 'L'
            count++
          }

        } else {
          const leftSide = col + 1;
          if (leftSide === tempTable[row].length) {
            tempTable[row][col] = 'L'
            count++
            continue;
          }
          if (tempTable[row][leftSide] !== 'R') {
            tempTable[row][col] = 'L'
            count++
          }
        }
      }
    }
  }
  return count;
}
findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]) // should return 2.
findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]) // should return 8.
findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]) // should return 0.
findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]) // should return 1.
findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]) // should return 5.