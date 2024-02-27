const fs = require('fs');

function countStudents(filepath) {
  let content;
  try {
    content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const records = content.split('\n');
  const computerScienceStudents = [];
  const softwareEngineeringStudents = [];

  records.forEach((record) => {
    const field = record.split(',');
    if (field !== [] && field !== null) {
      if (field[3] === 'CS') {
        computerScienceStudents.push(field[0]);
      } else if (field[3] === 'SWE') {
        softwareEngineeringStudents.push(field[0]);
      }
    }
  });

  console.log(`Number of students: ${computerScienceStudents.length + softwareEngineeringStudents.length}`);
  console.log(`Number of students in CS: ${computerScienceStudents.length}. List: ${computerScienceStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${softwareEngineeringStudents.length}. List: ${softwareEngineeringStudents.join(', ')}`);
}

module.exports = countStudents;
