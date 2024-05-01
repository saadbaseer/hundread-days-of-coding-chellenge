// Question 17:
//  Shrinking Guest List: Unfortunately, your new table
//  won’t arrive in time, and you
//  can only invite two guests.
var guests = ["Tahir", "Yasir", "Aryan", "Noor", "Imtiaz"];
console.log("Unfortunately, I can only invite two people for dinner tonight.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you for dinner tonight."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
