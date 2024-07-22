// Question 45:
// Cars: Create detailed car objects with flexible properties.
var make_car = function (manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    return car;
};
console.log(make_car("Toyota", "Corolla"));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true], ['lights', 'blue']));
