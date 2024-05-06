// Question 44:
// Sandwiches: Summarize sandwich orders with varying ingredients.
var sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("make a sandwich with ".concat(items.join(","), "."));
};
sandwich("ham", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
