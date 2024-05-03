// Question 33:
// Ordinal Numbers: Display numbers with their ordinal suffixes.


let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((numbers) => {
  let suffix = "th";
  if (numbers === 1) {
    suffix = "st";
  } else if (numbers === 2) {
    suffix = "nd";
  } else if (numbers === 3) {
    suffix = "nd";
  }
  console.log(`${numbers}${suffix}`);
});
