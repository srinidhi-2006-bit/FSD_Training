function f1()
{
    console.log("Hello");
}
function f2(a,callback)
{
    console.log(a);
    callback();
}
f2(10,f1)

/*
output:
10
Hello
*/