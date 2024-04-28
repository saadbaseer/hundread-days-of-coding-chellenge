// Question 12:
//  Greetings: Use the array from Exercise 11.instead 
// of just printing each person’s name, print a message to them. 
// The message should be the same for each person, 
// but personalized with their name.
var friends = ['Tahir', 'Yasir', 'Aryan', 'Noor'];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var name_1 = friends_1[_i];
    console.log("Hellow ".concat(name_1, " you are invited at my wedding ceremony"));
}
