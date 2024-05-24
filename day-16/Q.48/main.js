// Question 48:
//  Combining Arrays with Spread Operator: Suppose you're
// comparing prices of two different sets of laptops.Use the spread
// operator to combine these arrays into a single array sorted in
// ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1500, 1600];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort();
console.log(combinedPrices);
