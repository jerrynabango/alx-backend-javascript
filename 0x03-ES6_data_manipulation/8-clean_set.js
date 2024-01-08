export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const String = [];
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      String.push(value.slice(startString.length));
    }
  });
  return String.join('-');
}
