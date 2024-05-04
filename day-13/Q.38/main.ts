// Question 38:
//  Cities: Describing cities with a function.

let cities = (city: string, country: string = "pakistan") => {
  console.log(`${city} city is in ${country}`);
};
cities("karachi");
cities("london", "england");
