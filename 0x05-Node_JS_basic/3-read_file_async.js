const { readFile } = require('fs');

function countStudents(filepath) {
  const dataRows = {};
  const dataFields = {};
  let dataLength = 0;
  return new Promise((resolve, reject) => {
    readFile(filepath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            dataLength += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(dataRows, field[3])) {
              dataRows[field[3]].push(field[0]);
            } else {
              dataRows[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(dataFields, field[3])) {
              dataFields[field[3]] += 1;
            } else {
              dataFields[field[3]] = 1;
            }
          }
        }
        const l = dataLength - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(dataFields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${dataRows[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
