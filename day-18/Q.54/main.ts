// Question 54:
// Making Flexible Object Keys: Learn how to set up a
//  list where you can change the name of each section based on what
//   you need at that moment, like adjusting labels based on user choices.

let dynamicObject = (Keys: string, values: string) => {
  let dynamicObject = {};
  dynamicObject[Keys] = values;
  return dynamicObject;
};
let userPresference = dynamicObject("theme", "dark");
console.log(userPresference);
