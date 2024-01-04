import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new this.constructor();
  }

  static get [Symbol.species]() {
    return this.prototype.constructor;
  }
}
export default EVCar;
