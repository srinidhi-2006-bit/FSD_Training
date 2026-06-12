let arr=[1,2,3,4]
//forEach()
console.log("forEach demo for displaying arr elements")
arr.forEach(ele=>console.log(ele))

//map()
console.log("map demo to display sqaures")
console.log(arr.map(ele=>ele*ele))

//filter()
console.log("filter demo to display even numbers")
console.log(arr.filter(ele=>ele%2==0))

//reduce()
console.log("reduce demo to display sum of arr elements")
console.log(arr.reduce((acc,ele)=>acc+ele))

//some()
console.log("some demo to check whether atleast one element in arr >4")
console.log(arr.some(ele=>ele>4))

//every()
console.log("every demo to check whether all elements in arr >=1")
console.log(arr.every(ele=>ele>=1))

//sort()
let arr1=[1,2,6,3,4]
console.log("sort demo to sort arr elements")
console.log(arr1.sort())
console.log(arr1.sort((a,b)=>a-b))//increasing order
console.log(arr1.sort((a,b)=>b-a))//decreasing order

//find()
console.log("find demo to find element and display index")

/*
output:
forEach demo for displaying arr elements
1
2
3
4
map demo to display sqaures
[ 1, 4, 9, 16 ]
filter demo to display even numbers
[ 2, 4 ]
reduce demo to display sum of arr elements
10
some demo to check whether atleast one element in arr >4
false
every demo to check whether all elements in arr >=1
true
sort demo to sort arr elements
[ 1, 2, 3, 4, 6 ]
[ 1, 2, 3, 4, 6 ]
[ 6, 4, 3, 2, 1 ]
find demo to find element and display index
*/