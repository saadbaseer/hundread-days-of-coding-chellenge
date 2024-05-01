// Question 17:
//  Shrinking Guest List: Unfortunately, your new table
//  won’t arrive in time, and you
//  can only invite two guests.

let guests: string[] = ["Tahir", "Yasir", "Aryan", "Noor", "Imtiaz"];

console.log("Unfortunately, I can only invite two people for dinner tonight.");

while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you for dinner tonight.`);
}

guests.forEach((guest) => {
  console.log(`Dear ${guest}, you're still invited to dinner.`);
});

