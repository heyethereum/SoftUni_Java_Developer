function juice(juiceData) {
  // Write your code here
  let obj = juiceData.map((item) => {
    let [fruit, volume] = item.split(" => ");

    return { fruit, volume };
  });
  //console.log(obj);
  let bottleObj = {};
  let unbottleObj = {};

  for (const { fruit, volume } of obj) {
    if (volume >= 1000) {
      let sum = obj
        .filter((item) => item.fruit === fruit)
        .reduce((acc, item) => Number(acc) + Number(item.volume), 0);
      bottleObj[fruit] = { bottle: parseInt(sum / 1000), volume: sum % 1000 };
    } else {
      unbottleObj[fruit] =
        Number(unbottleObj[fruit]) + Number(volume) || Number(volume);
    }
  }
  //console.log(bottleObj);
  //console.log(unbottleObj);

  for (const key in unbottleObj) {
    if (unbottleObj[key] >= 1000) {
      bottleObj[key] = {
        bottle: parseInt(unbottleObj[key] / 1000),
        volume: unbottleObj[key] % 1000,
      };
    }
  }

  for (const [key, { bottle }] of Object.entries(bottleObj)) {
    console.log(`${key} => ${bottle}`);
  }
}

/* juice([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]); */

juice([
  "Kiwi => 234",
  "Pear => 500",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 501",
  "Watermelon => 6789",
]);
