// Question 58:
//  Average Score Calculator: Write a simple program that can take
//  lots of scores and find their average.
var averageScore = function () {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0) / scores.length;
    return total;
};
// Example: finding the average of four scores
console.log(averageScore(4, 4, 4, 4, 4)); // Shows the average score
