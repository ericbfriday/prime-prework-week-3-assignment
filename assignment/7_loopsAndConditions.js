function onlyEvens(numberArray) {

  var evensArray = []; // local array to store the evens you find
    for (i = 0; i < numberArray.length; i ++) {
      if (numberArray[i] % 2 === 0) {
          evensArray.push(numberArray[i]);
      }
    }
  // complete this function so that given an array full of
  // numbers (numberArray), it returns a new array containing
  // only the even ones. for example `onlyEvens([1,2,3,4]) === [2,4]`

  return evensArray;
}

// test your function onlyEvens by calling it below and logging the result

var tenString = [1,2,3,4,5,6,7,8,9,10]

console.log(onlyEvens(tenString));
