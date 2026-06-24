function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged Out Successfully");
    window.location.href = "login.html";
}