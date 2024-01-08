export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const typed = new DataView(buffer);
  typed.setInt8(position, value);
  return typed;
}
