/*
Use an Arrow Function to resolve the issue of this
Arrow functions don't have their own this. 
They inherit this from the surrounding scope.
*/

const user = {
    name: "Srinidhi",
    f1: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
user.f1();
/*
output:
Srinidhi
*/