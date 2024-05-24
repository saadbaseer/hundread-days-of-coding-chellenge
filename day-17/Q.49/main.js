// Question 49:
//  Function with Rest Parameters: Write a function that
//  takes a rest parameter representing multiple hobbies. It should
//  log each hobby with a statement saying you enjoy that hobby.
var hobbies = function () {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) { return console.log("I enjoy ".concat(hobby)); });
};
hobbies("cricket", "football", "hokcey");
