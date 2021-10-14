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
