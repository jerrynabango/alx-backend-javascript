export default function updateStudentGradeByCity(allStudents, city, newGrades) {
  if (!Array.isArray(allStudents)) {
    return [];
  }
  return allStudents
    .filter((students) => students.location === city)
    .map((students) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === students.id);
      const newGrade = grade.length === 0 ? { ...students, grade: 'N/A' } : { ...students, grade: grade[0].grade };
      return newGrade;
    });
}
