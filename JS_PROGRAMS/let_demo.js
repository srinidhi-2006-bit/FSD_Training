/*
let is block-scoped, so a new i is created for each iteration.
Each callback closes over its own copy of i.
var is function-scoped, so all iterations share the same variable i.
setTimeout() executes its callback after the loop has finished, and 
by then i has become 5. Since all callbacks reference the same variable 
through closure, each callback prints 5. Using let creates a new 
block-scoped variable for every iteration, so the output becomes 0 1 2 3 4.

*/

for(let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
