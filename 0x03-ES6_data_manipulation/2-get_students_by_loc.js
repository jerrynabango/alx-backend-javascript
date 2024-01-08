export default function getStudentsByLocation(allStudents, city) {
  if (!Array.isArray(allStudents)) {
    return [];
  }
  return allStudents.filter((student) => student.location === city);
}
