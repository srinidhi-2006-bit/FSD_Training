fetch("http://localhost:8002/students/count")
.then(res=>res.text())
.then(data=>{
    document.getElementById("studentCount").innerText=data;
});

fetch("http://localhost:8002/users/count")
.then(res=>res.text())
.then(data=>{
    document.getElementById("userCount").innerText=data;
});