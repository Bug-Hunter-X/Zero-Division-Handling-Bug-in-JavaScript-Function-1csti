function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return NaN; //Correct handling of zero values
  }
  return a / b;
}