function findStringLength(...params) {
  const total = params.join("").length;
  console.log(total);
  console.log(Math.floor(total / params.length));
}

findStringLength("chocolate", "ice cream", "cake");
