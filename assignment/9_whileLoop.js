function fillCrate( maxCapacity ){
  // this function received an argument of "maxCapacity"
  // maxCapacity is the maximum widget capacity of the crate
  // crates start empty

  var widgets = 0;
  // write a while loop that puts widgets in the crate until it is full
  // return the number of widgets added to the crate in the while loop
    while (widgets < maxCapacity) {
      widgets = widgets + 1;

    }
        return widgets;
} // end fillCrate

// test your function fillCrate by calling it below and logging the result

fillCrate(278);
