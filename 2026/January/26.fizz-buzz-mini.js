function fizzBuzzMini(n) {

  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return "Buzz"


  return n.toString();
}

console.log(fizzBuzzMini(3)); // should return "Fizz"
console.log(fizzBuzzMini(4)); // should return "4"
console.log(fizzBuzzMini(35)); // should return "Buzz"
console.log(fizzBuzzMini(75)); // should return "FizzBuzz"
console.log(fizzBuzzMini(98)); // should return "98"
console.log(fizzBuzzMini(15)); // should return "FizzBuzz"