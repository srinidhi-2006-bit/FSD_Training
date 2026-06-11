/*
Store this in a Variable to avoid binding this to current content
*/
const user = {
    name: "Srinidhi",
    f1: function () {
        const self = this;
        setTimeout(function () {
            console.log(self.name);
        }, 1000);
    }
};
user.f1();
/*output:
Srinidhi
*/

/*
Regular functions get their own this based on how they are called.
Arrow functions inherit this from the enclosing scope.
That's why arrow functions are commonly used inside setTimeout, 
event handlers, promises, and callbacks when you need access to the object's this.
*/