// Question 42:
//  Great Magicians: Add "the Great" to magician names.
// Question 41:
//  Magicians: Display magician names from an array.

let magicians: string[] = ["Saad", "Tahir", "Noor"];
let showMagicians = (magicians: string[]) => {
  //gave parameter
  magicians.forEach((magicians) => {
    //used for loop to illetrate over the array
    console.log(`${magicians}`);
  });
};

let make_great = (magician: string[]) => {
  for (let i = 0; i < magicians.length; i++) {
    magician[i] = magician[i] + " the Great";
  }
};

make_great(magicians); // Modifies the original array
showMagicians(magicians); // Shows modified names
