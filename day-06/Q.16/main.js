// Question 16:
// More Guests: You've found a bigger dinner
//  table, so there's room for more guests.
var guests = ["Tahir", "Yasir", "Aryan"];
guests.forEach(function (guests) {
    console.log("Hellow ".concat(guests, " you are invited for dinner tonight"));
});
console.log("happy to here that there are more guests !");
guests.push("Noor"); //push method is used to push in last of the array
guests.unshift("Mujahid"); //unshift methods pushes in the beggeninig
guests.splice(guests.length / 2, 0, "Imtiaz"); //splice method pushes a/c to your need and also can replace
guests.forEach(function (guests) {
    console.log("Hellow ".concat(guests, " you are invited for dinner tonight"));
});
