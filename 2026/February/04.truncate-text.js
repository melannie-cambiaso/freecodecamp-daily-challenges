function truncateText(text) {
  if (text.length > 20) {
    return text.substring(0,17).concat("...")
  }
  return text
}

console.log(truncateText("Hello, world!")); // should return "Hello, world!"
console.log(truncateText("This string should get truncated.")); // should return "This string shoul..."
console.log(truncateText("Exactly twenty chars")); // should return "Exactly twenty chars"
console.log(truncateText("...........................")); // should return "......................."