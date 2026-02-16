function countChange(change) {
  const CENTS = 100;
  return `$${(change.reduce((curr, next) => curr+next,0)/CENTS).toFixed(2)}`;
}

console.log(countChange([25, 10, 5, 1])); // should return "$0.41"
console.log(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25])); // should return "$1.43"
console.log(countChange([100, 25, 100, 1000, 5, 500, 2000, 25])); // should return "$37.55"
console.log(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10])); // should return "$0.70"
console.log(countChange([1])); // should return "$0.01"
console.log(countChange([25, 25, 25, 25])); // should return "$1.00"