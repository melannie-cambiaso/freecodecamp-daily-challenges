function isIntegerHypotenuse(a, b) {
  const hypotenuse = Math.hypot(a,b)
  return !hypotenuse.toString().includes(".")
}

console.log(isIntegerHypotenuse(3, 4)); // should return true
console.log(isIntegerHypotenuse(2, 3)); // should return false
console.log(isIntegerHypotenuse(5, 12)); // should return true
console.log(isIntegerHypotenuse(10, 10)); // should return false
console.log(isIntegerHypotenuse(780, 1040)); // should return true
console.log(isIntegerHypotenuse(250, 333)); // should return false