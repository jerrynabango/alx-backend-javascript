// fs- file system module
const fs = require('fs');

function countStudents(path) {
  try {
    const csv = fs.readFileSync(path, 'utf8').split('\n');
    let students = csv.slice(1);
    students = students.filter((student) => student);
    console.log(`Number of students: ${students.length}`);
    const fields = {};
    for (const student of students) {
        const row = student.split(',');
        if (!fields[row[3]]) fields[row[3]] = [];
        fields[row[3]].push(row[0]);
    }
    delete fields.field;
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  }
  catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
