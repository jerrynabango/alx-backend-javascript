const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const studentData = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);
        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            const field = noHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(studentData, field[3])) {
              studentData[field[3]].push(field[0]);
            } else {
              studentData[field[3]] = [field[0]];
            }
          }
        }
        resolve(studentData);
      }
    });
  });
};
