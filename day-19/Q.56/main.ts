// Question 56:
//  Keep Only Strings: Given a mix of different types of items,
// make a new list that has only the words.

// decleard a mix array
let mixedArray = [5, true, "saad", "waseeem", 30, true];

//applied filter method to only pick strings
let onlyWOrds = mixedArray.filter((items) => typeof items === "string");

//printed the output
console.log(onlyWOrds);
