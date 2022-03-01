// // q)1
// var arr = [10,7,34,2,09,23,08,80]
// var a=arr.filter((e)=>(e)>=10)
// console.log(a)


// // Q2).....
// var Fruits = [ 'apple', 'mango','rapes','strawberry','orange']
// var a=Fruits.filter((e)=>(e[0])==="o"  || (e[0])==="i" || (e[0])==="e"|| (e[0])==="a" || (e[0])==="u")
// console.log(a);


// Q3).....
// // Var Arr = [34,54,56,78,43,87,09]
// // Write a code for whose elements is the reverse number in the array?
// // Sample output [78,87,34,43]

// var Arr = [34,54,56,78,43,87,09]
// var a=Arr.filter((e)=>(e)!=54 && (e)!=56 && (e)!=09)
// console.log(a);



// // Q4)..........
// var numbers = [1, 2, 6, 8, 12, 14];
// var result = numbers.filter(element => element>5)
// console.log(result);

var Arr = [34,54,56,78,43,87,09]
var a=Arr.filter((e)=>(e)==e.sort())
// Arr.sort()
console.log(a)

// var arev = [...a].reverse();
