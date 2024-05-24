// Question 54:
// Making Flexible Object Keys: Learn how to set up a
//  list where you can change the name of each section based on what
//   you need at that moment, like adjusting labels based on user choices.
var dynamicObject = function (Keys, values) {
    var dynamicObject = {};
    dynamicObject[Keys] = values;
    return dynamicObject;
};
var userPresference = dynamicObject("theme", "dark");
console.log(userPresference);
