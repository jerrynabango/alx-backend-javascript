export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const key of Object.keys(report.allEmployees)) {
    allEmployees.push(...report.allEmployees[key]);
  }

  return allEmployees;
}
