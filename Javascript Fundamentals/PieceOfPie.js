function pieceOfPie(input, startSection, endSection) {
  return input.slice(
    input.indexOf(startSection),
    input.indexOf(endSection) + 1
  );
}

console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
