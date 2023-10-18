// vehicles

// autos
// moto
// buses

class Vehicle {
  constructor(id, model, brand, color, price, quantity, engine) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
    this.engine = engine;
  }
  getInformation() {
    return {
      id: this.id,
      model: this.model,
      brand: this.brand,
      color: this.color,
      price: this.price,
      quantity: this.quantity,
      engine: this.engine,
    };
  }
  printInformation() {
    console.log({
      id: this.id,
      model: this.model,
      brand: this.brand,
      color: this.color,
      price: this.price,
      quantity: this.quantity, // 300
      engine: this.engine,
    });
  }
  updateQuantity(value, operand) {
    if (operand === '+') {
      this.quantity = this.quantity + value;
    } else if (operand === '-') {
      this.quantity = this.quantity - value;
    } else {
      console.error('this operand is not acceptable');
      throw new Error('this operand is not acceptable');
    }
  }
}

const vehicle1 = new Vehicle(
  '123',
  'my model',
  'my brand',
  'red',
  123456,
  789,
  'V8'
);

vehicle1.printInformation();

//vehicle1.quantity = 789

/* vehicle1.buyProduct(20); */

vehicle1.printInformation();
//vehicle1.quantity = 789 + 20 = 809

// Dokument =>
// ... lesen
// ... update / bearbeitet
// ... gelöscht
// ... angelegt

const handle_N_Error = () => {};
