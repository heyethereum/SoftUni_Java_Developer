function sumFirstLast(input) {
  let sum = 0;
  if (input.length > 1)
    sum = parseInt(input.shift(), 10) + parseInt(input.pop(), 10);

  console.log(sum);
}

sumFirstLast(["1", "2", "3"]);
