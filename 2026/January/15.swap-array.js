function arraySwap(arr) {

  return arr.reverse();
}

console.log(arraySwap(["A", "B"])); // should return ["B", "A"]
console.log(arraySwap([25, 20])); // should return [20, 25]
console.log(arraySwap([true, false])); // should return [false, true]
console.log(arraySwap(["1", 1])); // should return [1, "1"]