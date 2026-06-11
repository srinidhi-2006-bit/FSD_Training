/*promises resolve the issue of callback hell*/
function fetchUserName(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching username");
            resolve("Srinidhi");
        }, 1000);
    });
}
function fetchUserDetails(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching user details");
            resolve({
                username: username,
                age: 18,
                city: "Hyderabad"
            });
        }, 1000);
    });
}
function displayUserDetails(details) {
    console.log("User Details:");
    console.log(details);
}
fetchUserName(1)
    .then((username) => {
        return fetchUserDetails(username);
    })
    .then((details) => {
        displayUserDetails(details);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


/*
output:
Fetching username
Fetching user details
User Details:
{ username: 'Srinidhi', age: 18, city: 'Hyderabad' }
*/