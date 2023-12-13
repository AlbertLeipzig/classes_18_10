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
