// Question 43: 
// Unchanged Magicians:  Preserve the original magician 
// names while creating a new "great" list.
var magicians = ["Alice", "David", "Chris"];
function make_great(magician) {
    var greatMagicians = [];
    magician.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagician = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagician); // Shows modified names
