var myDog = {
  name: "Happy Coder",
  legs: 4,
  bark: "bow-wow",
  friends: 2,
};
console.log(myDog.name);
// does not work: console.log(myDog[legs]);
// does not work: console.log(myDog."name");
console.log(myDog["legs"]);
console.log(myDog.friends);
console.log(myDog.hasOwnProperty("legs"));
console.log(myDog.bark);

/*
 * Interesting, property names and property strings are interchangeable
 * just as long as you are using the right one
 */
