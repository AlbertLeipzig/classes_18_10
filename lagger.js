// Higher Order Functions

// map
// forEach
// filter
// reduce
// sort
// find

/* const filteredNumbers = numbers.filter(num => num > 2)

console.log(filteredNumbers); */

/* const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);

const myArray = []

numbers.forEach((number) => myArray.push(number * 2));

console.log(myArray);

const mitarbeiter = []

mitarbeiter.forEach(_mitarbeiter => writeEmail(_mitarbeiter)) */

// Vorbild für Classes

const musician = {
  firstName: '',
  lastName: '',
  email: '',
  instruments: [],
  printName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  printInstruments: function () {
    this.instruments.forEach((instrument) => console.log(instrument));
  },
};

const subscriber = {
  firstName: '',
  lastName: '',
  email: '',
  printName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const owner = {
  firstName: '',
  lastName: '',
  email: '',
  business: [],
  printName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  printBusiness: function () {
    this.business.forEach((_business) => console.log(_business));
  },
};
