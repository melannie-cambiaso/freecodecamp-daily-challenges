function isLetter(str) {
  return str.match(/[a-zA-Z]/)
}

function isDigit(str) {
  return str.match(/[0-9]/)
}

function separateLettersAndNumbers(str) {
  let result = [];
  for (let i = 0; i<str.length - 1; i++) {
    result.push(str[i]);
    const current = str[i];
    const next = str[i+1];
    if ((isLetter(current) && isDigit(next)) || (isLetter(next) && isDigit(current))) {
      result.push('-')
    }
    if (i === str.length - 2) {
      result.push(next)
    }
  }
  return result.join('');
}
console.log(separateLettersAndNumbers("ABC123")); // should return "ABC-123"
console.log(separateLettersAndNumbers("Route66")); // should return "Route-66"
console.log(separateLettersAndNumbers("H3LL0W0RLD")); // should return "H-3-LL-0-W-0-RLD"
console.log(separateLettersAndNumbers("a1b2c3d4")); // should return "a-1-b-2-c-3-d-4"