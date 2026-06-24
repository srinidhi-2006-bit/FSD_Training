function login(){
    let username =document.getElementById("username").value;
    let password =document.getElementById("password").value;
    fetch(
    "http://localhost:8002/users/login",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username,
            password
        })
    })
    .then(res=>res.text())
    .then(data=>{
        if(data==="Login Success"){
            localStorage.setItem(
                "loggedInUser",
                username
            );
            window.location.href =
            "dashboard.html";
        }
        else{
            alert("Invalid Credentials");
        }
    });
}