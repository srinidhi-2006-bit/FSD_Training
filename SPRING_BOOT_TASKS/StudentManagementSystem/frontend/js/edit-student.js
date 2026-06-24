const params =new URLSearchParams(window.location.search);
const id = params.get("id");
fetch(`http://localhost:8002/students/${id}`)
.then(res => res.json())
.then(student => {
		document.getElementById("rollNo").value =student.rollNo;
		document.getElementById("name").value =student.name;
		document.getElementById("branch").value =student.branch;
		document.getElementById("cgpa").value =student.cgpa;
	});
function updateStudent(){
	let student = {
		rollNo:document.getElementById("rollNo").value,
		name:document.getElementById("name").value,
		branch:document.getElementById("branch").value,
		cgpa:document.getElementById("cgpa").value
	};
	fetch(
		`http://localhost:8002/students/${id}`,
		{
			method:"PUT",
			headers:{
			"Content-Type":"application/json"
			},
			body:JSON.stringify(student)
		}
	)
	.then(res=>res.json())
	.then(data=>{
	alert("Student Updated");
	window.location.href ="view-students.html";
	});
}