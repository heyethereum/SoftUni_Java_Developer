function aggregateElements(input) {
  console.log(input.reduce((acc, item) => acc + item, 0));
  console.log(input.reduce((acc, item) => acc + 1 / item, 0));
  console.log(input.reduce((acc, item) => acc + item, ""));
}

aggregateElements([1, 2, 3, 4, 5]);
