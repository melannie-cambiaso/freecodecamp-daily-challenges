function isSorted(arr) {

  const ascendingSorting = [...arr].sort(
    (a, b) => a - b
  );
  const descendingSorting = [...arr].sort(
    (a, b) => b - a
  );

  console.log(ascendingSorting);
  console.log(descendingSorting);

  if (
    arr.every(
      (val, index) =>
        val === ascendingSorting[index]
    )
  ) {
    return 'Ascending';
  }

  if (
    arr.every(
      (val, index) =>
        val === descendingSorting[index]
    )
  ) {
    return 'Descending';
  }

  return 'Not sorted';
}

// Test cases for isSorted function
console.log(isSorted([1, 2, 3, 4, 5])); // should return "Ascending"
console.log(isSorted([10, 8, 6, 4, 2])); // should return "Descending"
console.log(isSorted([1, 3, 2, 4, 5])); // should return "Not sorted"
console.log(isSorted([3.14, 2.71, 1.61, 0.57])); // should return "Descending"
console.log(
  isSorted([
    12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9,
  ])
); // should return "Ascending"
console.log(isSorted([0.4, 0.5, 0.3])); // should return "Not sorted"
