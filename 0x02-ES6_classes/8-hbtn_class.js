class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return null;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }
}
export default HolbertonClass;
