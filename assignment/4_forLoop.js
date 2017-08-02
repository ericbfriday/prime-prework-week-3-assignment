var students = ['Hunter' , 'Nestor' , 'Eric' , 'Bizz' , 'Kitty' , 'Greg'];

function shoesOnTheBus( ArrayOfKidsOnBus ){
  // This function accepts an array (ArrayOfKidsOnBus) of kids on the bus.
  // Assume each kid on the bus is wearing 2 shoes.
  var shoes = 0; // start with zero shoes

  // Write a for loop to count how many shoes are on the bus
  // AND console log "Nice shoes!" for each student.
    for (i = 0; i < ArrayOfKidsOnBus.length; i ++) {
      console.log('Nice Shoes!');
      shoes += 2;
    }
    return shoes;
    // This function should return the number of shoes on the bus.
} // end shoesOnTheBus

// test your function shoesOnTheBus by calling it below and logging the result
shoesOnTheBus(students);

/** testing code below.
var kids = ['Billy', 'GOAT', 'Mountain', 'Nigora', 'LL Cool J']

shoesOnTheBus(kids);

shoesOnTheBus([]);
*/
