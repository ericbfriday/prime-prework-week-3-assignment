function isCartonFull( eggsInCarton, cartonCapacity ){
  // Write an if statement that checks if the carton is at cartonCapacity
  // or over cartonCapacity. It should return true if at or over capacity and
  // false if not.
  if (eggsInCarton >= cartonCapacity) {
    return true;
  }

  else {
    return false;
  }
} // end isCartonFull

// test your function isCartonFull by calling it below and logging the result

isCartonFull(4,12);
