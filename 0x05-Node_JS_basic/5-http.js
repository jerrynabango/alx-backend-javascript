const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 1245;

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
                return;
            }

            const lines = data.trim().split('\n').map(line => line.trim()).filter(line => line !== '');
            const students = lines.map(line => line.split(','));
            const csStudents = students.filter(student => student[3] === "CS").map(student => student[0]);
            const sweStudents = students.filter(student => student[3] === "SWE").map(student => student[0]);

            resolve({
                students: students.map(student => student[0]),
                csStudents,
                sweStudents
            });
        });
    });
}

const app = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === '/') {
        res.statusCode = 200;
        res.end("Hello Holberton School!");
    } else if (req.url === "/students") {
        try {
            const data = await countStudents(process.argv[2]);
            const cslist = data.csStudents.join(", ");
            const swelist = data.sweStudents.join(", ");

            res.write("This is the list of our students\n");
            res.write("Number of students: ${data.csStudents.length + data.sweStudents.length}\n");
            res.write("Number of students in CS: ${data.csStudents.length}. List: ${cslist}\n");
            res.write("Number of students in SWE: ${data.sweStudents.length}. List: ${swelist}");
            res.end();
        } catch (error) {
            res.write("This is the list of our students\n");
            res.end(error.message);
        }
    } else {
        res.statusCode = 404;
        res.end("Not found");
    }
});

app.listen(port, hostname, () => {
    console.log("Server running at http://${hostname}:${port}");
});

module.exports = app;
