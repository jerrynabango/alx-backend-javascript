export default function getStudentIdsSum(allStudents) {
  if (!Array.isArray(allStudents)) {
    return [];
  }
  return allStudents.reduce((sumStudents, students) => sumStudents + students.id, 0);
}
