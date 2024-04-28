// Question 3: Name Cases: 
// Store a person’s name ina variable, and then print that
//  person’s name in lowercase, uppercase, and titlecase.

let personName :string="saad baseer khan";

console.log(personName.toLowerCase()); // this converts into lower case

console.log(personName.toUpperCase()); // this converts to upper case 

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());//this converts to titlecase
 

