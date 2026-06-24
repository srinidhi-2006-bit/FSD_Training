function saveStudent(){
	let rollNo =document.getElementById("rollNo").value;
	let name =document.getElementById("name").value;
	let branch =document.getElementById("branch").value;
	let cgpa =document.getElementById("cgpa").value;
	if(rollNo===""){
	    alert("Roll Number Required");
	    return;
	}
	if(name===""){
	    alert("Name Required");
	    return;
	}
	if(cgpa<0 || cgpa>10){
	    alert("CGPA must be between 0 and 10");
	    return;
	}
	fetch(
		"http://localhost:8002/students",
		{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				rollNo,
				name,
				branch,
				cgpa
			})
		}
	)
	.then(res=>res.json())
	.then(data=>{
	alert("Student Added");
	});
}