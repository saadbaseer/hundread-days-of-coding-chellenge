// Question 30:
//  Hello Admin: Greet users differently, especially 'admin'.

let userName: string[] = ["admin", "user1", "user2", "user3"];
userName.forEach((userName) => {
  if (userName == "admin") {
    console.log("hellow admin would you like to see status report");
  } else {
    console.log(`hellow ${userName} thank you for logging in here`);
  }
});
