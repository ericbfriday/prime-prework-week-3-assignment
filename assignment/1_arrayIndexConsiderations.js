
// remember! array indices start at 0

var colors = ['red', 'blue', 'yellow'];

// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
// uncomment the next two lines and replace ____ with the appropriate code
var theColorRed = colors[0];
var theColorYellow = colors[2];

// what happens if we access an index that has no element?
// uncomment the following line and replace ____ with the appropriate code
var fortyThirdColor = undefined;

function lastItem(lastItemArray) {
  // this function accepts an array (lastItemArray) as an argument
  // have it return the last item in the array
  return lastItemArray.slice(-1)[0];
}

// test your function lastItem by calling it below and logging the result
// for ex. console.log(lastItem(colors));

console.log(lastItem(colors));

//Testing script below
//var letters = ['p', 'r', 'i', 'm', 'e'];
//console.log(lastItem(letters));

/**
// Shara below.

var fortyThirdColor = [43];

function lastItem( lastItemArray ) {
  // this function accepts an array (lastItemArray) as an argument
  // have it return the last item in the array
  var array= ['shara', 'austin', 'travel'];
  return [array.length-1];
}

// test your function lastItem by calling it below and logging the result
// for ex. console.log(lastItem(colors));
// console.log(lastItem()):

*/
