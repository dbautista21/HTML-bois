/*
 * Small code describing function
 * of conditional ternary operator
 */

function compareNum(num1, num2) {
  let a = num1 === num2;
  let b = "Equal";
  let c = num1 > num2;
  let d = "Num1 is greater than num2.";
  let e = "Num1 is less than num2.";

  return a ? b : c ? d : e;
}

console.log(compareNum(3, 4)); // Should output: E -> Num1 is less than num2
console.log(compareNum(7, 4)); // Should output: D -> Num1 is greater than num2
console.log(compareNum(5, 5)); // Should output: B -> Equal
