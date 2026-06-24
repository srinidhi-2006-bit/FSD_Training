fetch("http://localhost:8002/students")
.then(res => res.json())
.then(students => {
    let table = "";
    students.forEach(s => {
        table += `
        <tr>
            <td>${s.studentId}</td>
            <td>${s.rollNo}</td>
            <td>${s.name}</td>
            <td>${s.branch}</td>
            <td>${s.cgpa}</td>
            <td>
                <button onclick="
                location.href='edit-student.html?id=${s.studentId}'
                ">
                Edit
                </button>
                <button onclick="
                deleteStudent(${s.studentId})
                ">
                Delete
                </button>
            </td>
        </tr>
        `;
    });
    document.getElementById("studentTable")
            .innerHTML = table;
});
function deleteStudent(id) {
    if(confirm("Are you sure you want to delete this student?")) {
        fetch(
            `http://localhost:8002/students/${id}`,
            {
                method: "DELETE"
            }
        )
        .then(() => {
            alert("Student Deleted Successfully");
            location.reload();
        });
    }
}
function searchStudent(){
	let name =document.getElementById("searchName").value;
	fetch(
	`http://localhost:8002/students/search/${name}`
	)
	.then(res=>res.json())
	.then(displayStudents);
}
function displayStudents(students){
	let table="";
	students.forEach(s=>{
		table+=`
		<tr>
		<td>${s.studentId}</td>
		<td>${s.rollNo}</td>
		<td>${s.name}</td>
		<td>${s.branch}</td>
		<td>${s.cgpa}</td>
		</tr>
		`;
	});
	document.getElementById("studentTable")
	.innerHTML=table;
}