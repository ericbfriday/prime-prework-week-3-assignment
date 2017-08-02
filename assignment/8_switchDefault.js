function checkDay( today ){
  // use a switch check if 'today' is the weekend ('saturday' or 'sunday')
  // DAYS MUST BE IN ALL lowercase LETTERS AND FULL NAMES
  // ex: 'wednesday', not 'Wednesday' or 'wed'
  // return true if it is the weekend, false if not
  switch(today) {
    case 'saturday':
      return true;

    case 'sunday':
      return true;

    default:
      return false;
    }
}// end checkDay

// test your function checkDay by calling it below and logging the result
console.log(checkDay('wednesday'));
