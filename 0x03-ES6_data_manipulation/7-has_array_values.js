export default function hasValuesFromArray(set, array) {
  return array.every((boolean) => set.has(boolean));
}
