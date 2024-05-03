// Question 32:
//  Checking Usernames: Ensure uniqueness in usernames.
var currentUsers = ["Saad", "Tahir", "aryan"];
var newUsers = ["Tahir", "Noor", "Saad", "Waseem"];
newUsers.forEach(function (newUsers) {
    if (currentUsers.some(function (currentUsers) {
        return currentUsers.toLowerCase() === newUsers.toLocaleLowerCase();
    })) {
        console.log("this username ".concat(newUsers, " is already taken"));
    }
    else {
        console.log("this username ".concat(newUsers, " is availible"));
    }
});
