function oddOrEven(n) {
  return n % 2 === 0 ? 'Even' : 'Odd';
}

console.log(oddOrEven(1)); // should return "Odd"
console.log(oddOrEven(2)); // should return "Even"
console.log(oddOrEven(13)); // should return "Odd"
console.log(oddOrEven(196)); // should return "Even"
console.log(oddOrEven(123456789)); // should return "Odd"
