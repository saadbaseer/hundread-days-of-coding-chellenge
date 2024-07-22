// Question 19:
//  Dinner Guests: Use one of your programs from Exercises
// 14 through 18 to print a message indicating the number of
//  people you are inviting to dinner.

let guests: string[] = ["Tahir", "Yasir", "Aryan"];
guests.push("Noor"); //push method is used to push in last of the array
guests.unshift("Mujahid"); //unshift methods pushes in the beggeninig
guests.splice(guests.length / 2, 0, "Imtiaz"); //splice method pushes a/c to your need and also can replace

guests.forEach((guests) => {
  console.log(`Hellow ${guests} you are invited for dinner tonight`);
});
console.log(`\nThere are ${guests.length} poeple we are inviting for dinner`);
