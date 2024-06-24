// Question 58:
//  Average Score Calculator: Write a simple program that can take
//  lots of scores and find their average.


let averageScore = (...scores: number[]): number => {
  // Adds all scores together and divides by the number of scores
  let total = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return total;
};

// Example: finding the average of four scores
console.log(averageScore(4, 4, 4, 4, 4)); // Shows the average score
