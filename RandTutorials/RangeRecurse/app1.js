function rangeOfNumbers(startNum, endNum) {
  // Base Case
  if (startNum === endNum) {
    return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
}

console.log(rangeOfNumbers(2, 5));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 10));
// Return an array of ints: Begins with startNum: Ends with endNum
// startNume always <= endNum
// Must work for startNum == endNum
