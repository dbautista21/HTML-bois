var person1 = { name: "Dilan", age: 23, gender: "Male" };
var person2 = { name: "Brissbany", age: 20, gender: "Woman" };
var clone1 = { name: "Dilan", age: 23, gender: "Male" };

if (person1 != person2) {
  console.log(
    "Brissbany and Dilan are not equal because they are two completely different people"
  );
} else {
  console.log("Brissbany and Dilan are the same person");
}
if (person1 == clone1) {
  console.log(
    "Dilan and Dilan's clone are the same exact person because they contain the same features"
  );
} else {
  console.log("Dilan and Dilan's clone are not the same");
}
if (person1 === clone1) {
  console.log("Dilan and Dilan's clone are the same person");
} else {
  console.log("Dilan and his clone are definitely not the same.");
}

console.log(person1);
console.log(clone1);
