// Question 15: 
// Changing Guest List: One of your guests can't make it to 
// the dinner, so you need to send out a new set of invitations with 
// a replacement guest.
var guests = ['Tahir', 'Yasir', 'Aryan', 'Noor']; //stores names of guests
// used forEach method to go over the array
guests.forEach(function (guest) {
    console.log("Hellow ".concat(guest, " you are invited fordinner tonight at my house"));
});
var notAvaliable = 'Yasir'; // stored a guest whose is not availible
console.log("".concat(notAvaliable, " is not avaliable for dinner tonight"));
var replacement = 'Imtiaz'; // stored a guest as a replacement
guests[guests.indexOf(notAvaliable)] = replacement;
// made a new invitation using forEach method
guests.forEach(function (guests) {
    console.log("Hellow ".concat(guests, " you are invited for dinner at my house tonight"));
});
