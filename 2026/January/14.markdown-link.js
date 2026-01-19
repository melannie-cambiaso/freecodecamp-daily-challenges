function parseLink(markdown) {
  const splitted = markdown.split(']');

  return `<a href="${splitted[1].replace(/[()]/g, '')}">${splitted[0].replace('[', "")}</a>`;
}

console.log(
  parseLink(
    '[freeCodeCamp](https://freecodecamp.org/)'
  )
); // should return '<a href="https://freecodecamp.org/">freeCodeCamp</a>'
console.log(
  parseLink(
    '[Donate to our charity.](https://www.freecodecamp.org/donate/)'
  )
); // should return '<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>'
console.log(
  parseLink(
    '[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)'
  )
); // should return '<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>'
