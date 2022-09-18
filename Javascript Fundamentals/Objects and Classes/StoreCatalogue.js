function store(products) {
  // Write your code here
  const result = products.sort().reduce((store, word) => {
    const letter = word.charAt(0).toUpperCase();
    const keyStore = store[letter] || (store[letter] = []); // creates empty array if object does not exists
    const [item, price] = word.split(" : ");
    keyStore.push(`  ${item}: ${price}`);

    return store;
  }, {});

  //console.log(result);
  for (const key in result) {
    console.log(key);
    result[key].forEach((word) => {
      console.log(word);
    });
  }
}

function store2(products) {
  const result = products.sort().reduce((store, word) => {
    const letter = word[0].toUpperCase();
    const [item, price] = word.split(" : ");
    return {
      ...store,
      [letter]: [...(store[letter] || []), `  ${item}: ${price}`],
    };
  }, {});

  console.log(result);
  /* for (const key in result) {
    console.log(key);
    result[key].forEach((word) => {
      console.log(word);
    });
  } */
}

store([
  "Apricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "apple : 1.25",
  "Anti-Bug Spray : 15",
  "t-Shirt : 10",
]);

// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Apricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499

console.log(`===================Alternate Solution!!=======================`);

store2([
  "banana : 2",
  "Rubic's Cube : 5",
  "raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rally Car : 2000000",
  "Paper : 0.000001",
  "Barrel : 10",
]);

// B
//   Banana: 2
//   Barrel: 10
// P
//   Paper: 0.000001
// R
//   Rally Car: 2000000
//   Raspberry P: 4999
//   Rolex: 100000
//   Rollon: 10
//   Rubic's Cube: 5

function test() {
  let obj = { a: [], A: [], b: [], C: [] };

  let arr = ["aaa", "AAA", "CCCC", "aaaaaa", "BBBB"];

  arr.forEach((word) => {
    obj[word[0]] = obj[word[0]] || (obj[word[0]] = []);
    obj[word[0]].push(word);
  });

  return obj;
}

console.log(test());
