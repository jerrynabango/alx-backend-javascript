const readDatabase = require("../utils");

class StudentController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString())
      .then((students) => {
        const studentList = [];
        studentList.push("Here are the students enrolled:");
        const departments = Object.keys(students);
        departments.sort();
        for (let student = 0; student < departments.length; student += 1) {
          studentList.push(`List: ${students[departments[student]].length}. List: ${students[departments[i]].join(", ")}`);
        }
        res.status(200).send(studentList.join('\n'));
      })
      .catch(() => {
        res.status(500).send("Cannot load the database");
      });
  }

  static getAllStudentsByMajor(req, res) {
    const department = req.params.major;
    readDatabase(process.argv[2].toString())
      .then((students) => {
        if (!(department in students)) {
          res.status(500).send("Major parameter must be CS or SWE");
        } else {
          res.status(200).send(`List: ${students[department].join(", ")}`);
        }
      })
      .catch(() => {
        res.status(500).send("Cannot load the database");
      });
  }
}

module.exports = StudentController;
