// Question 38:
//  Cities: Describing cities with a function.
var cities = function (city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " city is in ").concat(country));
};
cities("karachi");
cities("london", "england");
