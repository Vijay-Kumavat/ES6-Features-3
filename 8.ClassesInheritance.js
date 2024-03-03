// Parent class representing a vehicle
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    // Method to get the make and model of the vehicle
    getMakeAndModel() {
      return `${this.make} ${this.model}`;
    }
  }
  
  // Subclass for a specific type of vehicle - Car
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model);
    }
  }
  
  // Creating an instance of Car
  const myCar = new Car("Toyota", "Corolla");
  
  // Printing the make and model of the car
  console.log(myCar.getMakeAndModel()); // Output: Toyota Corolla
  