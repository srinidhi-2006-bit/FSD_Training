/*
this binds the current content 
Inside setTimeout, the callback is a regular function
When this function executes, this does not refer to user. 
In a browser, it refers to the global object window, and window.
name is usually empty or undefined.
*/
const user={
    name:"Srinidhi",
    f1:function(){
        setTimeout(function(){
            console.log(this.name)
        },1000);
    }
};
user.f1()
/*
output:
undefined
*/