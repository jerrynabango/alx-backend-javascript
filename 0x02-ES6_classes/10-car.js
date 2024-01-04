class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }

  static get [Symbol.species]() {
    return this.prototype.constructor;
  }
}
export default Car;
