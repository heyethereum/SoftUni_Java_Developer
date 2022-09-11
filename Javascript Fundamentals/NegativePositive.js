function negativePositive(input) {
  input
    .reduce((acc, item) => {
      item >= 0 ? acc.push(item) : acc.unshift(item);
      return acc;
    }, [])
    .forEach((item) => console.log(item));
}

negativePositive([7, -2, 8, 9]);
