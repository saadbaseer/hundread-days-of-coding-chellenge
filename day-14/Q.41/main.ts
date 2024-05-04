// Question 41:
//  Magicians: Display magician names from an array.
let magicians: string[] = ["saad", "tahir", "noor"];
let showMagicians = (magicians: string[]) => { //gave parameter
  magicians.forEach((magicians) => {  //used for loop to illetrate over the array
    console.log(`${magicians}`);
  });
};
showMagicians(magicians); // recalled the function magicians array 

