class Bank {
  constructor(bankName) {
    this._bankname = bankName;
    this.allCustomers = [];
  }
  newCustomer(customer) {
    let cust = this.allCustomers.find(
      (c) => c.personalId === customer.personalId
    );
    if (!cust) {
      this.allCustomers.push({
        firstName: customer.firstName,
        lastName: customer.lastName,
        personalId: customer.personalId,
        totalMoney: 0,
      });
    } else {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }
    return customer;
  }
  depositMoney(personalId, amount) {
    let customer = this.allCustomers.find((c) => c.personalId === personalId);
    if (!customer) {
      throw new Error("We have no customer with this ID!");
    } else {
      /* if (!Array.isArray(customer.transactionInfo)) {
        customer.transactionInfo = [];
      } */
      customer.transactionInfo = customer.transactionInfo ??= []; // ES2020 syntax
      let message = `${customer.transactionInfo.length + 1}. ${
        customer.firstName
      } ${customer.lastName} made deposit of ${amount}$!`;
      customer.transactionInfo.push(message);
      customer.totalMoney += Number(amount);
      return `${customer.totalMoney}$`;
    }
  }
  withdrawMoney(personalId, amount) {
    let cust = this.allCustomers.find((c) => c.personalId === personalId);
    if (!cust) {
      throw new Error("We have no customer with this ID!");
    }
    if (cust.totalMoney < amount) {
      throw new Error(
        `${cust.firstName} ${cust.lastName} does not have enough money to withdraw that amount!`
      );
    } else {
      /* if (!Array.isArray(cust.transactionInfo)) {
        cust.transactionInfo = [];
      } */
      cust.transactionInfo = cust.transactionInfo ?? []; // ES2020 syntax
      let message = `${cust.transactionInfo.length + 1}. ${cust.firstName} ${
        cust.lastName
      } withdrew ${amount}$`;
      cust.transactionInfo.push(message);
      cust.totalMoney -= Number(amount);
      return `${cust.totalMoney}$`;
    }
  }
  customerInfo(personalId) {
    let cust = this.allCustomers.find((c) => c.personalId === personalId);
    if (!cust) {
      throw new Error("We have no customer with this ID!");
    }
    let result = `Bank name: ${this._bankname}\nCustomer name: ${cust.firstName} ${cust.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${cust.totalMoney}$\nTransaction:`;
    for (let i = cust.transactionInfo.length - 1; i >= 0; i--) {
      result += `\n` + cust.transactionInfo[i];
    }
    return result;
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "John",
    lastName: "Miller",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Michelle",
    lastName: "Davis",
    personalId: 4151596,
  })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
