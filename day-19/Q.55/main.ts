// Question 55:
// Double Numbers in an Array: Make a list of numbers.
//  Then, use a trick to make a new list where each number is twice
//   its original value.


//decleared list of numbers
let numbers = [1, 2, 3, 4, 5];

//applied map method to double the number
let doubleNumber = numbers.map((num) => {
  return num * 2;
});

//printed the output
console.log(doubleNumber);
