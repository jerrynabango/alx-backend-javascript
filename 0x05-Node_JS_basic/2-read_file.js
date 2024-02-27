const fs = require("fs");

function countStudents(filepath) {
  let content;
  try {
    content = fs.readFileSync(filepath, { encoding: 'utf8', flag: "r" });
  } catch (err) {
    throw new Error("Cannot load the database");
  }

  const records = content.split('\n');
  const compSci = [];
  const softWare = [];

  records.forEach((record) => {
    const field = record.split(",");
    if (field !== [] && field !== null) {
      if (field[3] === "CS") {
        compSci.push(field[0]);
      } else if (field[3] === "SWE") {
        softWare.push(field[0]);
      }
    }
  });
  console.log(`Number of students: ${compSci.length + softWare.length}`);
  console.log(`Number of students in CS: ${compSci.length}. List: ${compSci.join(", ")}`);
  console.log(`Number of students in SWE: ${softWare.length}. List: ${softWare.join(", ")}`);
}

module.exports = countStudents;
