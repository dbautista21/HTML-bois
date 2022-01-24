// Call
var obj = { num: 2 };
var obj2 = { num: 5 };
var addToThis = function (a) {
  return this.num + a;
};

console.log(addToThis.call(obj, 3)); // functionname.call(obj, functionarguments)
// first argument should always be the object

/*
 * Call attaches a function to the object temporarily
 */

var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));

// The difference between call and apply is that
// apply allows you to pass the non-object arguments as an array

// Bind
console.log(addToThis.bind(obj, arr)); // Returns a function. Wow?
