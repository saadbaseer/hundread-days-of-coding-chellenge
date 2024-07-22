// Question 57:
//  Find the Average Grade: Given a list of grades,
//  calculate the average grade.
// A list of grades
var grades = [4, 2, 3, 5, 6];
// reduce method is used for the avg
var avg = grades.reduce(function (accum, curVal, index, array) {
    // totel stores the the sum of the array
    var total = accum += curVal;
    if (index === array.length - 1) {
        return total / array.length;
    }
    return total;
});
//prints the avg
console.log(avg);
