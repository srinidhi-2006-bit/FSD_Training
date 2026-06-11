/*
example of using var which does not print the expected output of 0 1 2 3 4 it prints 5 5 5 5 5
only when used with setTimeout()function otherwise it prints the expected output
since var is function-scoped there is only one variable i shared by all iterations of the loop.
setTimeout() function is asynchronous The callback function is not executed immediately.
this function is placed in the event queue and will run after approximately 1000 ms.
Loop finishes before callbacks execute The loop runs very quickly After the last iteration
it returns 5 and the loop stops.Callbacks reference the same variable Each callback forms a 
closure over the same variable i, not its value at the time the callback was created.
After 1 second, all callbacks execute and look up the current value of i
*/
for(var i=0;i<5;i++)
{
    setTimeout(function(){
        console.log(i);
    },1000);
}

/*
output:
5
5
5
5
5
*/