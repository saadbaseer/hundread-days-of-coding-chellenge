// Question 33:
// Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (numbers) {
    var suffix = "th";
    if (numbers === 1) {
        suffix = "st";
    }
    else if (numbers === 2) {
        suffix = "nd";
    }
    else if (numbers === 3) {
        suffix = "nd";
    }
    console.log("".concat(numbers).concat(suffix));
});
