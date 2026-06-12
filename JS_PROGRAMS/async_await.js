/*
async and await are extension of promises 
*/
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
async function getData()
{
    const uname=fetchUserName(1);
    const udetails=fetchUserDetails(uname);
    console.log(udetails);
}
getData()


/*
output:if await not used
Promise { <pending> }
Fetching username
Fetching user details
*/
/*
output:when await used
Fetching username
Fetching user details
{ username: 'Srinidhi', age: 18, city: 'Hyderabad' }
*/