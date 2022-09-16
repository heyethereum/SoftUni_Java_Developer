class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
      set: (value) => {
        let name = value.split(" ");

        if (name.length === 2) {
          this.firstName = name[0];
          this.lastName = name[1];
        }
      },
      get: () => `${this.firstName} ${this.lastName}`,
    });
  }
}

let person = new Person("Peter", "Smith");
console.log(person.fullName); // Peter Smith

person.firstName = "George";
console.log(person.fullName); // George Smith

person.lastName = "Peterson";
console.log(person.fullName); // George Peterson

person.fullName = "Nikola Tesla";
console.log(person.firstName); // Nikola
console.log(person.lastName); // Tesla

let person2 = new Person("Albert", "Simpson");
console.log(person2.fullName); // Albert Simpson

person2.firstName = "Simon";
console.log(person2.fullName); // Simon Simpson

person2.fullName = "Peter";
console.log(person2.firstName); // Simon
console.log(person2.lastName);

const users = [{ name: "piggy" }, { name: "puppy" }, { name: "kitty" }];
const getName = (user) => user.name;
const usernames = users.map(getName);
console.log(usernames);
