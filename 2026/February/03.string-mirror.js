function mirror(str) {
  const reversed = str.split("").reverse().join("");
  return str + reversed;
}

console.log(mirror("freeCodeCamp")); // should return "freeCodeCamppmaCedoCeerf"
console.log(mirror("RaceCar")); // should return "RaceCarraCecaR"
console.log(mirror("helloworld")); // should return "helloworlddlrowolleh"
console.log(mirror("The quick brown fox...")); // should return "The quick brown fox......xof nworb kciuq ehT"