const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const studentList = [];
      studentList.push('This is the list of our students');
      const departmentKeys = Object.keys(students); // Changed variable name from keys to departmentKeys
      departmentKeys.sort();
      for (let i = 0; i < departmentKeys.length; i += 1) {
        studentList.push(`Number of students in ${departmentKeys[i]}: ${students[departmentKeys[i]].length}. List: ${students[departmentKeys[i]].join(', ')}`);
      }
      response.status(200).send(studentList.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
