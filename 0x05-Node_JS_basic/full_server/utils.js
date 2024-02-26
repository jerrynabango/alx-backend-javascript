const { readFile } = require("fs");

function readDatabase(filePath) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const withoutHeader = lines.slice(1);
        withoutHeader.forEach((line) => {
          if (line) {
            const fields = line.toString().split(",");
            const [studentName, , , major] = fields;
            students[major] = students[major] ? [...students[major], studentName] : [studentName];
          }
        });
        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
