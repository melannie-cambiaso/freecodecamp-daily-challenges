const items = {
  "shirt": 34.25,
  "jeans":	48.50,
  "shoes":	75.00,
  "hat":	19.95,
  "socks":	15.00,
  "jacket":	109.95
}

function getsFreeShipping(cart, minimum) {
  let totalPrice = 0;
  for (const item of cart) {
    const price = Object.entries(items).find(el => el[0] === item)
    console.log(price)
    if (price) {
      totalPrice += price[1]
    }
  }
  return totalPrice >= minimum;
}

console.log(getsFreeShipping(["shoes"], 50)); // should return true
console.log(getsFreeShipping(["hat", "socks"], 50)); // should return false
console.log(getsFreeShipping(["jeans", "shirt", "jacket"], 75)); // should return true
console.log(getsFreeShipping(["socks", "socks", "hat"], 75)); // should return false
console.log(getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100)); // should return true
console.log(getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200)); // should return false