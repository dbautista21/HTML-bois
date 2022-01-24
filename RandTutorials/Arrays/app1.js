var iCheck = 10;
var j = iCheck;
j = 11;
console.log("Value of iCheck: " + iCheck);

var val1 = [1, 2, 9, 4, 5, 6, 7];
var val2 = val1;

val2[0] = 200;
console.log("Array Value " + val1[0]);

// val2 and val1 refer to the same array
// val1.clone() will help copy an array the same way an int is copied
