let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species"
}
console.log(pets);
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
console.log(pets);
