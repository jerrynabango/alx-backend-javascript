export default function getListStudentIds(allStudents) {
  if (!Array.isArray(allStudents)) {
    return [];
  }
  return allStudents.map((ids) => ids.id);
}
