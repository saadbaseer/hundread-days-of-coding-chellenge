// Question 42:
//  Great Magicians: Add "the Great" to magician names.
// Question 41:
//  Magicians: Display magician names from an array.
var magicians = ["Saad", "Tahir", "Noor"];
var showMagicians = function (magicians) {
    //gave parameter
    magicians.forEach(function (magicians) {
        //used for loop to illetrate over the array
        console.log("".concat(magicians));
    });
};
var make_great = function (magician) {
    for (var i = 0; i < magicians.length; i++) {
        magician[i] = magician[i] + " the Great";
    }
};
make_great(magicians); // Modifies the original array
showMagicians(magicians); // Shows modified names
