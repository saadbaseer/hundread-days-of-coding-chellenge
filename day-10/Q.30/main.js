// Question 30:
//  Hello Admin: Greet users differently, especially 'admin'.
var userName = ["admin", "user1", "user2", "user3"];
userName.forEach(function (userName) {
    if (userName == "admin") {
        console.log("hellow admin would you like to see status report");
    }
    else {
        console.log("hellow ".concat(userName, " thank you for logging in here"));
    }
});
