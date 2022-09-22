function solveClasses() {
  class Pet {
    constructor(owner, name) {
      this.owner = owner;
      this.name = name;
      this.comments = [];
    }
    addComment(comment) {
      if (!this.comments.find((c) => c === comment)) {
        this.comments.push(comment);
        return `Comment is added.`;
      } else {
        throw new Error("This comment is already added!");
      }
    }
    feed() {
      return `${this.name} is fed`;
    }
    toString() {
      let str = `Here is ${this.owner}'s pet ${this.name}.`;
      if (this.comments.length > 0) {
        str += `\nSpecial requirements: ` + this.comments.join(", ");
      }
      return str;
    }
  }
  class Cat extends Pet {
    constructor(owner, name, insideHabits, scratching) {
      super(owner, name);
      this.insideHabits = insideHabits;
      this.scratching = scratching;
    }
    feed() {
      return super.feed() + `, happy and purring.`;
    }
    toString() {
      let str =
        super.toString() +
        `\nMain information:\n${this.name} is a cat with ${this.insideHabits}`;
      if (this.scratching) str += `, but beware of scratches.`;
      return str;
    }
  }
  class Dog extends Pet {
    constructor(owner, name, runningNeeds, trainability) {
      super(owner, name);
      this.runningNeeds = runningNeeds;
      this.trainability = trainability;
    }
    feed() {
      return super.feed() + `, happy and wagging tail.`;
    }
    toString() {
      return (
        super.toString() +
        `\nMain information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`
      );
    }
  }
  return { Pet, Cat, Dog };
}
let classes = solveClasses();
let pet = new classes.Pet("Ann", "Merry");
console.log(pet.addComment("likes bananas"));
console.log(pet.addComment("likes sweets"));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat("Jim", "Sherry", "very good habits", true);
console.log(cat.addComment("likes to be brushed"));
console.log(cat.addComment("sleeps a lot"));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog("Susan", "Max", 5, "good");
console.log(dog.addComment("likes to be brushed"));
console.log(dog.addComment("sleeps a lot"));
console.log(dog.feed());
console.log(dog.toString());
/* Your Task

Implement the following classes: Pet, Cat, and Dog.
Pet Class

    constructor(owner, name) - should have these 3 properties:

        owner - string

        name - string

        comments - array

    addComment(comment):

This function should receive a single comment as a string, add it to the comments array and return a message:

"Comment is added."

If the same comment was already added to the comments array, throw an error:

"This comment is already added!"

    feed():

This function should return a simple message:

"{name} is fed`

    toString():

This function should return a string:

"Here is {owner}'s pet {name}."

If there are any comments then add them on a new line:

"Special requirements: {comment1}, {comment2}, {comment3 ...}"
Cat Class

The Cat class inherits from Pet.

It should have these 4 properties:

    owner - string

    name - string

    insideHabits - string

    scratching - boolean

    feed():

This function should inherit the feed() method of the Pet class and extend the returned message adding this to the end of the same line:

", happy and purring."

    toString():

This function should extend the toString() method of the Pet class, returning the message with some more lines at the end, which are:

"Main information:
{name} is a cat with {insideHabits}"

And if the value of the scratching prоperty is true you should add this at the end:

", but beware of scratches."

Note: For more information, see the examples below!
Dog Class

The Dog class inherits from Pet.

    constructor(owner, name, runningNeeds, trainability) - it should have these 4 properties:

        owner - string

        name - string

        runningNeeds - string

        trainability - string

    feed():

This function should inherit the feed() method of the Pet class and extend the returned message, adding this at the end:

", happy and wagging tail."

    toString():

This function should extend the toString() method of the Pet class returning the message with some more lines at the end, which are:

"Main information:
{name} is a dog with need of {runningNeeds}km running every day and {trainability} trainability."

Note: For more information, see the examples below!
Submission

Submit your solveClasses function. */

// Comment is added.
// Comment is added.
// Merry is fed
// Here is Ann's pet Merry.
// Special requirements: likes bananas, likes sweets

// Comment is added.
// Comment is added.
// Sherry is fed, happy and purring.
// Here is Jim's pet Sherry.
// Special requirements: likes to be brushed, sleeps a lot
// Main information:
// Sherry is a cat with very good habits,
// but beware of scratches.

// Comment is added.
// Comment is added.
// Max is fed, happy and wagging tail.
// Here is Susan's pet Max.
// Special requirements: likes to be brushed,
// sleeps a lot
// Main information:
// Max is a dog with need of 5km running every day
// and good trainability.
