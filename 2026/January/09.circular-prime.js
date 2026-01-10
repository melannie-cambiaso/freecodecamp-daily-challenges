const checkPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isCircularPrime(n) {

  let stringNumber = String(n);
  let count = 0;
  for (let i = 0; i<stringNumber.length; i++) {
    stringNumber = stringNumber.slice(1) + stringNumber[0];
    const numberInt = parseInt(stringNumber)
    if (checkPrime(numberInt)) count++
  }

  return count === stringNumber.length;
}
