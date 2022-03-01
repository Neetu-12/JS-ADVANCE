var numbers= [-0.20,-10, 0.2, -40,1, -25];
 
// method (return element > 0).
var found = numbers.find(function (element) {
   return element > 0;
});
console.log(found);
 
// Es6 way
var found = numbers.find((element) =>
   element > 0);
console.log(found);
