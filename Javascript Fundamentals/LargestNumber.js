let numbers = [2, 49, 80, 250, 30, 100, 5, 7];

const largestNumber = (...params) =>
  `The largest number is ${Math.max(...params)}.`;

console.log(largestNumber(...numbers));
