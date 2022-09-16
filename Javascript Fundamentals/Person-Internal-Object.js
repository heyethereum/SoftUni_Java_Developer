class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullname", {
      set: function (value) {
        let name = value.split(" ");

        if (name.length === 2) {
          this.firstName = name[0];
          this.lastName = name[1];
        }
      },
      get: function () {
        return `${this.firstName} ${this.lastName}`;
      },
    });
  }
}

let person = new Person("Peter", "Smith");
console.log(person.fullname); // Peter Smith

const users = [{ name: "piggy" }, { name: "puppy" }, { name: "kitty" }];
const getName = (user) => user.name;
const usernames = users.map(getName);
console.log(usernames);
