// Question 44:
// Sandwiches: Summarize sandwich orders with varying ingredients.


let sandwich = (...items: string[]) => {
  console.log(`make a sandwich with ${items.join(",")}.`);
};
sandwich("ham", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
