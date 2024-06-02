// Question 56:
//  Keep Only Strings: Given a mix of different types of items,
// make a new list that has only the words.
// decleard a mix array
var mixedArray = [5, true, "saad", "waseeem", 30, true];
//applied filter method to only pick strings
var onlyWOrds = mixedArray.filter(function (items) { return typeof items === "string"; });
//printed the output
console.log(onlyWOrds);
