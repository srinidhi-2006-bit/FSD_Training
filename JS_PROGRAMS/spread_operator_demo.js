/*without spread operator*/
/*
let a1=[10,20,30]
let a2=a1
a1.push(40)
console.log(a1)
console.log(a2)

o/p:
[ 10, 20, 30, 40 ]
[ 10, 20, 30, 40 ]
*/

/*with spread operator*/
let a1=[10,20,30]
let a2=[...a1]
a1.push(40)
console.log(a1)
console.log(a2)

/*
o/p:
[ 10, 20, 30, 40 ]
[ 10, 20, 30 ]
*/