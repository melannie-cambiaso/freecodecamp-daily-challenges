function parseInlineCode(markdown) {
  let count = 0;
  let result = '';
  for (const letter of markdown) {
    if (count % 2 === 0 && letter === '`') {
      result += '<code>';
      count++
      continue;
    }

    if (!count % 2 === 0 && letter === '`') {
      result += '</code>';
      count++
      continue;
    }

    if (letter !== '`') {
      result += letter;
    }
  }
  return result;
}

// Examples cases
console.log(
  parseInlineCode(
    'Use `let` to declare the variable.'
  )
); // should return "Use <code>let</code> to declare the variable."
console.log(
  parseInlineCode(
    'Use `let` or `const` to declare a variable.'
  )
); // should return "Use <code>let</code> or <code>const</code> to declare a variable."
console.log(
  parseInlineCode(
    'Run `npm install` then `npm start`.'
  )
); // should return "Run <code>npm install</code> then <code>npm start</code>."
