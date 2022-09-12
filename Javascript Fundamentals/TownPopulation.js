function townPopulation(townData) {
  const display = townData.reduce((town, stringInput) => {
    let temp = stringInput.split(" <-> ");
    town[temp[0]] = parseInt(town[temp[0]]) + parseInt(temp[1]) || temp[1];

    return town;
  }, {});

  Object.entries(display).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });
}
/* townPopulation([
  "Bucharest <-> 1830000",
  "Vienna <-> 1900000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]); */
townPopulation([
  "Istanbul <-> 100000",
  "Hong Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
