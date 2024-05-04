// Question 37: 
// Large Shirts: Default values in make_shirt().
var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = '"i love coding"'; }
    console.log("make a ".concat(size, " size of shirt and write ").concat(message, " on it"));
};
make_shirt();
make_shirt("medium");
make_shirt('small', '"problem solver"');
