console.clear();
// Anmeldeformular mit Classes

// Firma Produkte verkaufft

// Smartphone
// Tablet
// Laptop
// Smartwatches

// smartphoneX.price = 200
// smartphoneX.price = 300

class Electronic {
  constructor(id, name, price, model, camara, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.model = model;
    this.camara = camara;
    this.quantity = quantity;
  }
  greeting() {
    return `hello, I'm ${this.name} and cost ${this.price}`;
  }
  updatePrice(value) {
    this.price = value;
  }
  getQuantity() {
    return this.quantity;
  }
  updateQuantity(value) {
    this.quantity -= value;
  }
}

// Smartphone (simKarte-slot)

class Smartphone extends Electronic {
  constructor(simKarteSlot, ...args) {
    super(...args);
    this.simKarteSlot = simKarteSlot;
  }
}

// Tablet (OS)

class Tablet extends Electronic {
  constructor(os, ...args) {
    super(...args);
    this.os = os;
  }
}

// Laptop (graphikKarte)

class Laptop extends Electronic {
  constructor(graphikKarte, ...args) {
    super(...args);
    this.graphikKarte = graphikKarte;
  }
}
// Smartwatches (simKarte)

class Smartwatches extends Electronic {
  constructor(simKarte, ...args) {
    super(...args);
    this.simKarte = simKarte;
  }
}
