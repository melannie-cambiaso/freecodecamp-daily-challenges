function isValidHex(str) {
  return (str.match(/[a-fA-F0-9]+$/)|| []).length > 0 && str.startsWith('#') && [4, 7].includes(str.length);
}

console.log(isValidHex("#123")); // should return true
console.log(isValidHex("#123abc")); // should return true
console.log(isValidHex("#ABCDEF")); // should return true
console.log(isValidHex("#0a1B2c")); // should return true
console.log(isValidHex("#12G")); // should return false
console.log(isValidHex("#1234567")); // should return false
console.log(isValidHex("#12 3")); // should return false
console.log(isValidHex("fff")); // should return false