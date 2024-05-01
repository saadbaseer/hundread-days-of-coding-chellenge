// Question 27:
//  Alien Colors #3: Convert your if-else chain to handle three
//   colors: green, yellow, red.
var alienColour = "red";
if (alienColour == "green") {
    console.log("you earned 5 points");
    // this cocndition will run bcz its true
}
else if (alienColour == "red") {
    console.log("you earned 10 points");
}
else if (alienColour == "yellow") {
    console.log("you eared 15 points");
}
alienColour = "red";
// this cocndition will run bcz its true
if (alienColour == "red") {
    console.log("you earned 5 points");
}
else if (alienColour == "green") {
    console.log("you earned 10 points");
}
else if (alienColour == "yellow") {
    console.log("you eared 15 points");
}
alienColour = "red";
if (alienColour == "yellow") {
    console.log("you earned 5 points");
}
else if (alienColour == "green") {
    console.log("you earned 10 points");
} // this cocndition will run bcz its true
else if (alienColour == "red") {
    console.log("you eared 15 points");
}
