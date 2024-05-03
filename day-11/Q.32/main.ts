// Question 32:
//  Checking Usernames: Ensure uniqueness in usernames.

let currentUsers: string[] = ["Saad", "Tahir", "aryan"];
let newUsers: string[] = ["Tahir", "Noor", "Saad", "Waseem"];
newUsers.forEach((newUsers) => {
  if (
    currentUsers.some(
      (currentUsers) =>
        currentUsers.toLowerCase() === newUsers.toLocaleLowerCase()
    )
  ) {
    console.log(`this username ${newUsers} is already taken`);
  } else {
    console.log(`this username ${newUsers} is availible`);
  }
});
