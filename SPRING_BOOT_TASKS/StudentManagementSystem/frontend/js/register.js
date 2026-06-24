function registerUser(){
	let username =document.getElementById("username").value;
	let email =document.getElementById("email").value;
	let password =document.getElementById("password").value;
	if(username===""){
	    alert("Username Required");
	    return;
	}
	if(email===""){
	    alert("Email Required");
	    return;
	}
	if(password===""){
	    alert("Password Required");
	    return;
	}
	fetch(
		"http://localhost:8002/users/register",
		{
			method:"POST",
			headers:{
			"Content-Type":"application/json"
			},
			body:JSON.stringify({
			username,
			email,
			password
			})
		}
	)
	.then(res=>res.json())
	.then(data=>{
	alert("Registered Successfully");
	window.location.href="login.html";
	});
}