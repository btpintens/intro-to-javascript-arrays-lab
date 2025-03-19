/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job working with arrays and iterating over data! 
  The suggestions below improve efficiency, readability, and best practices. 
  Keep up the great work! 🚀
*/

// ✅ Exercise 2: Add strings to the array
// Well done! This is the simplest and cleanest way to initialize the array.
const foods = ["pizza", "cheeseburger"];
console.log("Exercise 2 result:", foods);

// ✅ Exercise 3: Insert at the beginning
// Great use of `.unshift()`, which is the most efficient method for this.
foods.unshift("taco");
console.log("Exercise 3 result:", foods);

// ✅ Exercise 4: Access an array element
// Good job! Declared `favFood` with `const` since it doesn’t change.
const favFood = foods[1];
console.log("Exercise 4 result:", favFood);

// ✅ Exercise 5: Insert an element between two others
// Perfect use of `.splice()`! Clear and correct.
foods.splice(2, 0, "tofu");
console.log("Exercise 5 result:", foods);

// ✅ Exercise 6: Replace elements
// Great approach! Alternative method using `.splice()` for multiple replacements:
foods.splice(1, 1, "sushi", "cupcake");
console.log("Exercise 6 result:", foods);

// ✅ Exercise 7: Using `.slice()` method
// Good logic! Slight improvement: `.slice()` already returns a new array.
const yummy = foods.slice(1, 3);
console.log("Exercise 7 result:", yummy);

// ✅ Exercise 8: Finding an index
// Works perfectly! Used `const` for best practice.
const soyIdx = foods.indexOf("tofu");
console.log("Exercise 8 result:", soyIdx);

// ✅ Exercise 9: Joining elements
// Great use of `.join()`!
const allFoods = foods.join(" -> ");
console.log("Exercise 9 result:", allFoods);

// ✅ Exercise 10: Check for an element
// Good use of `.includes()`!
const hasSoup = foods.includes("soup");
console.log("Exercise 10 result:", hasSoup);

// ✅ Exercise 11: Odd numbers from an array
// Well done using `.forEach()`. Alternative: `.filter()` for a more concise approach.
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = nums.filter((num) => num % 2 !== 0);
console.log("Exercise 11 result:", odds);

// ✅ Exercise 12: FizzBuzz with arrays
// Good approach! Optimized by combining logic into a single `.forEach()` loop.
const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach((number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    fizzbuzz.push(number);
  }
  if (number % 3 === 0) {
    fizz.push(number);
  }
  if (number % 5 === 0) {
    buzz.push(number);
  }
});

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

// ✅ Exercise 13: Retrieve the Last Array
// Great use of `.length - 1`! Alternative: `.at(-1)` for better readability.
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

const numList = numArrays.at(-1);
console.log("Exercise 13 result:", numList);

// ✅ Exercise 14: Accessing within nested arrays
// Correct! Retrieves `66` efficiently.
const num = numArrays[2][1];
console.log("Exercise 14 result:", num);

// ✅ Exercise 15: Nested array sum
// Great job flattening the array first! Alternative using `.reduce()`:
const total = numArrays.flat().reduce((sum, num) => sum + num, 0);
console.log("Exercise 15 result:", total);
