function biggerHalf(input) {
  const half = Math.floor(input.length / 2);

  return input.sort((a, b) => a - b).slice(half);
}

console.log(biggerHalf([4, 7, 2, 5]));
