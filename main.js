console.clear();

class Person {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  printName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

class Musician extends Person {
  constructor(instruments, ...args) {
    super(...args);
    this.instruments = instruments;
  }
  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
  printInstruments() {
    this.instruments.forEach((instrument) => console.log(instrument));
  }
}

class Subscriber extends Person {
  constructor(...args) {
    super(...args);
  }
}

class Owner extends Person {
  constructor(business, ...args) {
    super(...args);
    this.business = business;
  }
  printBusiness() {
    this.business.forEach((_business) => console.log(_business));
  }
}

class Author extends Person {
  constructor(articles, ...args) {
    super(...args);
    this.articles = articles;
  }
  printArticles() {
    console.table(this.articles);
  }
}

