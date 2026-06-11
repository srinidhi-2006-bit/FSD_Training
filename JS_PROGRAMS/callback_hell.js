/*pyramid of dome=> as depth increases it becomes call back hell*/
function fetchUserName(userId, callback) {
    setTimeout(() => {
        console.log("Fetching username...");
        callback("Srinidhi");
    }, 1000);
}
function fetchUserDetails(username, callback) {
    setTimeout(() => {
        console.log("Fetching user details...");
        callback({
            username: username,
            age: 18,
            city: "Hyderabad"
        });
    }, 1000);
}
function displayUserDetails(details) {
    console.log("User Details:");
    console.log(details);
}
fetchUserName(1, (username) => {
    fetchUserDetails(username, (details) => {
        displayUserDetails(details);
    });
});

/*
output:
Fetching username...
Fetching user details...
User Details:
{ username: 'Srinidhi', age: 18, city: 'Hyderabad' }
*/