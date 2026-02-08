function oddOrEvenDay(timestamp) {
  const date = new Date(timestamp)
  const day = date.getUTCDate()
  return day % 2 === 0 ? 'even': 'odd';
}

console.log(oddOrEvenDay(1769472000000)); // should return "odd"
console.log(oddOrEvenDay(1769444440000)); // should return "even"
console.log(oddOrEvenDay(6739456780000)); // should return "odd"
console.log(oddOrEvenDay(1)); // should return "odd"
console.log(oddOrEvenDay(86400000)); // should return "even"