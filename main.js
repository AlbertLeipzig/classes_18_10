console.clear();

// Class Musician
// Class Subscriber
// Class Owner

class Musician {
  constructor(firstName, lastName, email, instruments) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.instruments = instruments;
  }
  printName (){
    console.log(`${this.firstName} ${this.lastName}`);
  }
  get name(){
    return `${this.firstName} ${this.lastName}`
  }
  printInstruments () {
    this.instruments.forEach((instrument) => console.log(instrument));
  }
}



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
