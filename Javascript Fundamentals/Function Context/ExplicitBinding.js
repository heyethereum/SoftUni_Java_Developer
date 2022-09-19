function speak(message) {
  console.log(`My name is ${this.name}. ${message}`);
}

let person = {
  name: "John",
};

speak.call(person, "This is my story..."); // My name is John. This is my story...
/* ===================================================================================== */
let praise = function (...praises) {
  console.log(`This is ${this.name}.`);

  let compliments = praises
    .reduce((acc, curr) => acc + `-- ${curr}\n`, `He is:\n`)
    .trim();
  return compliments;
};

let dog = {
  name: "Rex",
};

console.log(praise.call(dog, "A good boy", "My best friend")); // using call()
console.log(praise.apply(dog, ["A good boy", "My best friend"])); // using apply() => argument in array[]

let cat = {
  name: "Charlie",
};

console.log(praise.call(cat, "A good companion", "A goofball"));
/* ============================================================== */
const firstPerson = {
  name: "Peter",
  prof: "Fisherman",
  shareInfo: function () {
    console.log(`${this.name} works as a ${this.prof}`);
  },
};

const secondPerson = {
  name: "George",
  prof: "Manager",
};
firstPerson.shareInfo.apply(secondPerson); // George works as a Manager
/* ======================================================================== */
let student = {
  alias: `Motivated student`,
  subject: "Web Development",
  study: function (hours) {
    console.log(`${this.alias} studies 
      ${this.subject} ${hours} hours a day`);
  },
};

let professor = {
  alias: `Grumpy professor`,
  subject: "Mathematics",
  teach: function (hours) {
    console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`);
  },
};

let teach = professor.teach.bind(student, 2);
teach(); // Motivated student teaches Web Development 2 hours a day
