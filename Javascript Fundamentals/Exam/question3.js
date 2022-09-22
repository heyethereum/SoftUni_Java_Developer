class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.customers = [];
    this.totalProfit = Number(0);
    this.currentWorkload = 0;
  }
  newCustomer(ownerName, petName, kind, procedures) {
    if (this.currentWorkload >= this.capacity) {
      throw new Error("Sorry, we are not able to accept more patients!");
    } else {
      const customer = this.customers.find(
        (c) => c.ownerName === ownerName && c.petName === petName
      );
      if (customer && customer.procedures.length > 0) {
        throw new Error(
          `This pet is already registered under ${customer.ownerName} name! ${
            customer.petName
          } is on our lists, waiting for ${customer.procedures.join(", ")}`
        );
      } else {
        if (customer) {
          customer.procedures = procedures;
        } else {
          kind = kind.toLowerCase();
          this.customers.push({ ownerName, petName, kind, procedures });
        }
        this.currentWorkload += 1;
        return `Welcome ${petName}!`;
      }
    }
  }
  onLeaving(ownerName, petName) {
    let customer = this.customers.find((c) => c.ownerName === ownerName);
    if (!customer) {
      throw new Error(`Sorry, there is no such customer!`);
    }
    customer = this.customers.find(
      (c) => c.ownerName === ownerName && c.petName === petName
    );
    if (!customer || customer.procedures.length === 0) {
      throw new Error(`Sorry, there are no procedures for ${petName}!`);
    }
    this.totalProfit += 500 * customer.procedures.length;
    this.currentWorkload -= 1;
    this.customers[this.customers.indexOf(customer)].procedures = [];

    return `Goodbye ${petName}. Stay safe!`;
  }
  toString() {
    const sorted = this.customers.sort((a, b) => {
      return (
        a.ownerName.localeCompare(b.ownerName) ||
        a.petName.localeCompare(b.petName)
      );
    });
    /* .reduce((acc, owner) => {
        return {
          ...acc,
          [owner.ownerName]: {
            ...(acc[owner.ownerName] || {}),
            [owner.petName]: {
              ...(acc[owner.ownerName]?.[owner.petName] || []),
              kind: owner.kind,
              procedures: owner.procedures,
            },
          },
        };
      }, {}); */
    let str = `${this.clinicName} is ${
      (this.currentWorkload / this.capacity) * 100
    }% busy today!\nTotal profit: ${this.totalProfit.toFixed(2)}$`;

    let before = "";
    sorted.forEach((owner) => {
      if (before !== owner.ownerName) {
        before = owner.ownerName;
        str += `\n${owner.ownerName} with:`;
      }
      str += `\n---${owner.petName} - a ${
        owner.kind
      } that needs: ${owner.procedures.join(", ")}`;
    });
    return str;
  }
}
let clinic = new VeterinaryClinic("SoftCare", 10);

console.log(
  clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
);

console.log(
  clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
);
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
//clinic.toString();
console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
//clinic.toString();
console.log(clinic.toString());

// Your Task

// Write a VeterinaryClinic class and implement the following functionality:
// Functionality

//     constructor (clinicName, capacity) - should have these 3 properties:

//         clinicName - a property of type string

//         capacity - a property of type number

//         customers - initially an empty array

// Receives 2 parameters at initialization of the class - clinicName and capacity.

// Hint: Add more properties like totalProfit and currentWorkload to help you complete the task. Read the problem description until the end to understand what is required.

//     newCustomer(ownerName, petName, kind, procedures):

// The ownerName, petName and kind are of type string and the procedures are an array of strings.

// This information will be used in the following toString() method.

//     ownerName:

// A string that stores the name of the current pet owner.

// One owner may have more than one pet under their name. Design the customer's structure wisely so you can collect all the provided information.

//     petName:

// A string containing the name of the current pet.

//     kind:

// A string that stores the current kind of pet.

// Be careful of the capitalization of the input string. You will need to print it out in lowercase later on.

// Once stored information about ownerName, petName, and kind stays in the clinic's data, even after the pet has been healed.

//     procedures:

// An array of strings that stores the procedures that need to be performed on the current pet.

// You know that a pet is currently a patient of the clinic when one or more procedures are recorded in their list of procedures.

// When the pet is healed and leaves the clinic, its array of procedures must be emptied so if the pet comes back again, it can be listed with new procedures.

// Before registering:

//     Check if the clinic can accept more pets.

// If the clinic is full throw an error:

// "Sorry, we are not able to accept more patients!"

//     Check if the pet is already registered under this owner's name.

// If it is registered and still has a full list of procedures, you should throw an error:

// "This pet is already registered under {ownerName} name! {petName} is on our lists, waiting for {all their procedures, separated by ', '}."

//     Otherwise, this function should add the customer and their pet, update the current clinic workload and return:

// "Welcome {petName}!"

//     onLeaving (ownerName, petName):

// Check if the given ownerName corresponds to a customer in the customers array, if not, throw an error:

// "Sorry, there is no such customer!"

// Then check if the given petName is registered under this ownerName, if not or if it is registered but the procedures array is empty, then throw an error:

// "Sorry, there are no procedures for {petName}!"

// Otherwise, on leaving generate bill of the current customer, add it to the total profit of the clinic and save the data.

// Consider the cost of each procedure to be 500.00$.

// Do not forget to update the current workload.

// Clear the procedures array for the current pet.

// When a pet leaves the clinic, petName and kind should be kept in the clinic's data, but the procedures array should be cleared.

// After that return, the following string:

// "Goodbye {petName}. Stay safe!"

//     toString():

// Return the full clinic's status information.

// First, we have to calculate how busy the clinic is, in percentages.

// The percentage represents all current pets that have procedures, based on the full capacity of the clinic.

// It is rounded down to the nearest number:

// "{clinicName} is {percentage}% busy today!"

// On the second line, return the collected profit, which must be formatted to the second digit after the decimal point:

// "Total profit: {profit}$"

// On the next lines, return the entire information about the owners in the following format.

// Print the kind property in lowercase.

// All owners should be returned in alphabetical order, along with all their pets also in alphabetical order:

// "{ownerName} with:
// ---{petName} - a {kind} that needs: {procedures separated by ', '}"
// Examples

// This is an example of how the code is intended to be used.

// Sample code usage:
// let clinic = new VeterinaryClinic("SoftCare", 10);

// console.log(
//   clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
// );

// console.log(
//   clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
// );

// console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));

// console.log(clinic.onLeaving("Jim Jones", "Tiny"));

// console.log(clinic.toString());

// clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);

// console.log(clinic.toString());
// Welcome Tom!
// Welcome Max!
// Welcome Tiny!
// Goodbye Tiny. Stay safe!
// SoftCare is 20% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Tiny - a cat that needs:
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
// SoftCare is 30% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Sara - a dog that needs: A154B
// ---Tiny - a cat that needs:
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
