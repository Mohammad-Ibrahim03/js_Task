// ==========================================
// File: JAVASCRIPT_Loops (1).pdf
// ==========================================

// --- 1-JavaScript Loops ---

// Q1: Use a while loop to print numbers from 1 to 10 using while.
let counter = 1; // Declares counter variable initialized at 1
while (counter <= 10) {
  // Sets condition to continue loop as long as counter is 10 or less
  console.log(counter); // Prints current counter value to console
  counter++; // Increments counter variable by 1 for next iteration
} // Closes while loop scope

// Q2: Use a for loop to iterate through an array and print each element.
const loopArray = [1, 2, 3, 4, 5]; // Defines input array of numbers
for (let i = 0; i < loopArray.length; i++) {
  // Sets index variable starting at 0 up to array length minus 1
  console.log(loopArray[i]); // Retrieves and prints element at index i to console
} // Closes for loop scope

// Q3: Use a for loop to print even numbers from 0 to 10.
for (let i = 0; i <= 10; i += 2) {
  // Initializes loop variable i at 0 and increments by 2 each iteration up to 10
  console.log(i); // Prints current even number to console
} // Closes for loop scope

// Q4: Use a for loop to print the sum of numbers from 1 to 10.
let totalSum = 0; // Declares accumulator variable initialized at 0
for (let i = 1; i <= 10; i++) {
  // Loops variable i starting from 1 up to 10
  totalSum += i; // Adds current value of i to running totalSum accumulator
} // Closes for loop scope
console.log(totalSum); // Prints total accumulated sum to console

// Q5: Use a for loop to find the largest number in an array.
const maxArray = [1, 2, 3, 4, 5]; // Defines input array of numbers
let maxNum = maxArray[0]; // Sets initial max value to the first array element
for (let i = 1; i < maxArray.length; i++) {
  // Loops starting from second element through end of array
  if (maxArray[i] > maxNum) {
    // Compares current element against current maximum
    maxNum = maxArray[i]; // Updates maxNum if current element is greater
  } // Closes if statement block
} // Closes for loop scope
console.log(maxNum); // Prints largest number found to console

// Q6: Use a for loop to find the average of numbers in an array.
const avgArray = [1, 2, 3, 4, 5]; // Defines input array of numbers
let sumForAvg = 0; // Sets total sum accumulator variable to 0
for (let i = 0; i < avgArray.length; i++) {
  // Iterates through all array index positions
  sumForAvg += avgArray[i]; // Adds current element value to sum accumulator
} // Closes for loop scope
const average = sumForAvg / avgArray.length; // Divides total sum by total number of elements to compute average
console.log(average); // Prints calculated average to console

// Q7: Use a for loop to find the factorial of a number.
const numForFactorial = 5; // Defines input number for factorial calculation
let factorialResult = 1; // Initializes factorial accumulator product variable to 1
for (let i = 1; i <= numForFactorial; i++) {
  // Loops counter from 1 up to target input number
  factorialResult *= i; // Multiplies accumulator product by current counter value
} // Closes for loop scope
console.log(factorialResult); // Prints calculated factorial value to console

// Q8: Use a for loop to print the Fibonacci sequence up to a given number.
const fibLimit = 10; // Sets maximum threshold limit for sequence elements
let a = 0,
  b = 1; // Initializes first two starting terms of Fibonacci sequence
console.log(a); // Prints initial term 0 to console
for (; b <= fibLimit; ) {
  // Loops conditionally as long as term b is within specified limit
  console.log(b); // Prints current sequence term b to console
  let nextTerm = a + b; // Calculates next sequence term by adding previous two terms
  a = b; // Shifts second term value into first term position
  b = nextTerm; // Updates second term with newly computed term
} // Closes for loop scope

// Q9: Use a for loop to print the prime numbers up to a given number.
const primeLimit = 20; // Defines upper boundary limit for prime checking
for (let i = 2; i <= primeLimit; i++) {
  // Loops test numbers starting from 2 up to primeLimit
  let isPrime = true; // Initializes boolean flag assuming current number i is prime
  for (let j = 2; j < i; j++) {
    // Loops potential divisors from 2 up to i - 1
    if (i % j === 0) {
      // Checks if current test number is evenly divisible by divisor j
      isPrime = false; // Sets prime flag to false when divisor is found
      break; // Immediately terminates inner divisor checking loop
    } // Closes if statement block
  } // Closes inner divisor loop scope
  if (isPrime) console.log(i); // Prints current number to console if prime flag remains true
} // Closes outer number loop scope

// Q10: Use a for loop to print the elements of a 2D array.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // Defines 2D array matrix structure
for (let i = 0; i < matrix.length; i++) {
  // Iterates through each inner row array
  for (let j = 0; j < matrix[i].length; j++) {
    // Iterates through each element inside current inner row array
    console.log(matrix[i][j]); // Accesses and prints element at row i and column j to console
  } // Closes inner row loop scope
} // Closes outer matrix loop scope

// Q11: Use a for loop to print the elements of an array in reverse order.
const reverseArr = [1, 2, 3, 4, 5]; // Defines input array of numbers
for (let i = reverseArr.length - 1; i >= 0; i--) {
  // Initializes index at last position and decrements down to 0
  console.log(reverseArr[i]); // Accesses and prints array element at index i to console
} // Closes reverse for loop scope

// Q12: Use a for loop to print the elements of an array with a specific step.
const stepArr = [1, 2, 3, 4, 5]; // Defines input array of numbers
const stepSize = 2; // Sets step increment value
for (let i = 0; i < stepArr.length; i += stepSize) {
  // Increments index variable i by stepSize each iteration
  console.log(stepArr[i]); // Prints array element at current stepped index to console
} // Closes stepped for loop scope

// Q13: Use a for loop to find the frequency of a number in an array.
const freqArr = [1, 2, 1, 3, 2, 1]; // Defines input array with repeated values
const targetNum = 1; // Defines target number to count occurrences of
let frequencyCount = 0; // Initializes counter variable to 0
for (let i = 0; i < freqArr.length; i++) {
  // Iterates through all elements of input array
  if (freqArr[i] === targetNum) {
    // Checks if current array element matches target value
    frequencyCount++; // Increments occurrence counter by 1 when match is found
  } // Closes match condition block
} // Closes frequency for loop scope
console.log(frequencyCount); // Prints total frequency count to console

// Q14: Use the .map() method on the heros array to return a new array with renamed keys and id.
const heros = [
  // Declares original array containing superhero objects
  { name: "Iron Man", power: "Tech" }, // Hero object entry 1
  { name: "Spider-Man", power: "Spider abilities" }, // Hero object entry 2
  { name: "Thor", power: "Godly powers" }, // Hero object entry 3
  { name: "Hulk", power: "Super strength" }, // Hero object entry 4
]; // Closes heros array definition
const newHeros = heros.map((hero, index) => {
  // Uses map method to transform each object receiving element and index
  return {
    // Returns newly structured object for mapped array
    hero: hero.name, // Assigns original 'name' property value to new key 'hero'
    power: hero.power, // Retains original 'power' property value
    id: index, // Assigns current array element index to new key 'id'
  }; // Closes returned object literal
}); // Closes map method callback function scope
console.log(newHeros); // Prints newly transformed array to console

// Q15: Write a JavaScript function that uses filter to return elements with more than 7 characters.
function filterLongWords(words) {
  // Declares function taking an array of words as parameter
  return words.filter((word) => word.length > 7); // Uses filter method to return new array containing words with length > 7
} // Closes filterLongWords function scope
const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
]; // Defines input words array
console.log(filterLongWords(inputWords)); // Invokes function with input array and prints returned filtered array

// Q16: Use reduce to sum the squares of numbers divisible by 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Defines input array of sequential numbers
const sumSquaredDivisibleBy5 = numbers.reduce((acc, current) => {
  // Uses reduce method with accumulator and current value
  if (current % 5 === 0) {
    // Checks if current number is evenly divisible by 5
    return acc + current * current; // Squares current number and adds result to running accumulator
  } // Closes divisibility condition block
  return acc; // Returns accumulator unchanged if current number is not divisible by 5
}, 0); // Sets initial accumulator value to 0
console.log(sumSquaredDivisibleBy5); // Prints computed sum of squared numbers to console

