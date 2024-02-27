const express = require('express');
const fs = require('fs');

const server = express();
const port = 1245;

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      else {
        const dataRows = data.split('\n');
        const computerScienceStudents = [];
        const softwareEngineeringStudents = [];

        dataRows.forEach((record) => {
          const field = record.split(',');
          if (field !== [] && field !== null) {
            if (field[3] === 'CS') {
              computerScienceStudents.push(field[0]);
            } else if (field[3] === 'SWE') {
              softwareEngineeringStudents.push(field[0]);
            }
          }
        });
        let response = `Number of students: ${computerScienceStudents.length + softwareEngineeringStudents.length}\n`;
        response += `Number of students in CS: ${computerScienceStudents.length}. List: ${computerScienceStudents.join(', ')}\n`;
        response += `Number of students in SWE: ${softwareEngineeringStudents.length}. List: ${softwareEngineeringStudents.join(', ')}`;
        resolve(response);
      }
    });
  });
}

server.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

server.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  const database = process.argv.length > 2 ? process.argv[2] : '';
  try {
    const content = await countStudents(database);
    res.write(content);
  } catch (err) {
    res.write(err.message);
  }
  res.end();
});

server.listen(port);

module.exports = server;
