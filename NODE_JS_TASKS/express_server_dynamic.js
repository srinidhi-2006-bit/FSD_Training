const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
// Read students from JSON file
function getStudents() {
    const data = fs.readFileSync("students.json", "utf8");
    return JSON.parse(data);
}
// Save students to JSON file
function saveStudents(students) {
    fs.writeFileSync(
        "students.json",
        JSON.stringify(students, null, 2)
    );
}
// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});
// Get All Students
app.get("/students", (req, res) => {
    const students = getStudents();
    res.json({
        message: "Students fetched successfully",
        data: students
    });
});
// Get Student By ID
app.get("/students/:id", (req, res) => {
    const students = getStudents();
    const student = students.find(
        s => s.id == req.params.id
    );
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.json({
        message: "Student fetched successfully",
        data: student
    });
});
// Add Student
app.post("/students", (req, res) => {
    const students = getStudents();
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }
    const newStudent = {
        id: students.length
            ? students[students.length - 1].id + 1
            : 1,
        name,
        age
    };
    students.push(newStudent);
    saveStudents(students);
    res.status(201).json({
        message: "Student added successfully",
        data: newStudent
    });
});
// Update Student
app.put("/students/:id", (req, res) => {
    const students = getStudents();
    const student = students.find(
        s => s.id == req.params.id
    );
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    const { name, age } = req.body;
    if (name) student.name = name;
    if (age) student.age = age;
    saveStudents(students);
    res.json({
        message: "Student updated successfully",
        data: student
    });
});
// Delete Student
app.delete("/students/:id", (req, res) => {
    let students = getStudents();
    const student = students.find(
        s => s.id == req.params.id
    );
    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    students = students.filter(
        s => s.id != req.params.id
    );
    saveStudents(students);
    res.json({
        message: "Student deleted successfully",
        data: student
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});