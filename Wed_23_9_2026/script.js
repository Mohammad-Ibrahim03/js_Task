// ==========================================
// File: JAVASCRIPT_Array_Object.pdf
// ==========================================

// --- 1-JavaScript objects ---

// Q1: Create an object with properties name, age, and gender and print its values to the console.
const person1 = { name: "Adam", age: 25, gender: "male" }; // Creates an object storing name, age, and gender properties
console.log(person1.name, person1.age, person1.gender); // Accesses and prints each property value separated by space

// Q2: Create an object and add a new property to it using dot notation.
const person2 = { name: "Adam", age: 25 }; // Initializes an object with name and age properties
person2.gender = "male"; // Uses dot notation to attach a new property 'gender' to the object
console.log(person2); // Prints the object containing the newly added property

// Q3: Access the value of a property in an object using dot notation.
const person3 = { name: "Adam", age: 25 }; // Initializes an object with name and age properties
const nameValue = person3.name; // Reads the 'name' property value using dot notation and stores it in a variable
console.log(nameValue); // Prints the stored property value to the console

// --- 2- JavaScript Array ---

// Q1: Create an array of numbers and use the forEach() method to print each element to the console.
const numbersArray = [1, 2, 3, 4, 5]; // Initializes an array containing sequence of numbers
numbersArray.forEach((num) => {
  // Calls forEach to iterate over every element in numbersArray
  console.log(num); // Prints the current element of the iteration to the console
}); // Closes the forEach callback function scope

// Q2: Use the sort() method to sort an array of strings alphabetically.
const fruits = ["banana", "cherry", "apple"]; // Defines an array with unsorted string elements
fruits.sort(); // Sorts array elements in alphabetical order in-place
console.log(fruits); // Prints the sorted array to the console

// Q3.A: Use the reverse() method to reverse the order of elements in an array.
const itemsToReverse = ["apple", "banana", "cherry"]; // Defines an array of string elements
itemsToReverse.reverse(); // Reverses the element positions in the array in-place
console.log(itemsToReverse); // Prints the reversed array to the console

// Q3.B: Use the concat() method to combine two arrays into a single array.
const array1 = [1, 2, 3]; // Defines the first source array of numbers
const array2 = [4, 5, 6]; // Defines the second source array of numbers
const combinedArray = array1.concat(array2); // Merges array1 and array2 together into a new single array
console.log(combinedArray); // Prints the newly combined array to the console

// Q3.C: Use the slice() method to extract a portion of an array.
const originalArr = [1, 2, 3, 4, 5, 6]; // Defines a source array of numbers
const extractedPortion = originalArr.slice(2, 4); // Extracts elements starting at index 2 up to (excluding) index 4
console.log(extractedPortion); // Prints the extracted array segment to the console

// Q3.D: Use the splice() method to add and remove elements from an array.
const spliceArray = [1, 2, 3, 4, 5]; // Defines an initial array of numbers
spliceArray.splice(3, 1); // Removes 1 element starting from index position 3
console.log(spliceArray); // Prints the modified array to the console

// Q3.E: Use the indexOf() method to find the index of a specific element in an array.
const searchArray = [10, 20, 30, 40, 50]; // Defines an array of numeric values
const foundIndex = searchArray.indexOf(30); // Finds and returns the first index location of element value 30
console.log(foundIndex); // Prints the found index position to the console

// Q3.F: Use the join() method to convert an array to a string.
const arrToJoin = [1, 2, 3, 4, 5]; // Defines an array of numeric values
const joinedString = arrToJoin.join(","); // Joins all array elements into a single comma-separated string
console.log(joinedString); // Prints the resulting string output to the console

// Q3.G: Use the split() method to convert a string to an array.
const strToSplit = "1,2,3,4,5"; // Defines a comma-delimited string
const splitArray = strToSplit.split(","); // Splits string at every comma delimiter into an array of substrings
console.log(splitArray); // Prints the resulting array of strings to the console

// Q7: Use the length property to find the number of elements in an array.
const lengthArr = [1, 2, 3, 4, 5]; // Defines an array of numbers
const totalElements = lengthArr.length; // Accesses the length property to get total element count
console.log(totalElements); // Prints the total element count to the console

// Q8: Use the for...of loop to iterate through an array.
const loopArr = [1, 2, 3, 4, 5]; // Defines an array of numbers
for (const item of loopArr) {
  // Iterates directly over each value contained in loopArr
  console.log(item); // Prints each individual element during iteration
} // Closes the for...of loop scope

// Q9: Use the Array.isArray() method to check if an object is an array.
const checkTarget = [1, 2, 3, 4, 5]; // Defines an object variable containing an array
const isArr = Array.isArray(checkTarget); // Evaluates whether checkTarget is a valid Array instance
console.log(isArr); // Prints the boolean result (true) to the console

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

// ==========================================
// File: JAVASCRIPT_Functions (1).pdf
// ==========================================

// --- 1-JavaScript Functions ---

// Q1: Create a function that will display the smallest value in the array.
function findSmallest(arr) {
  // Declares function accepting array parameter arr
  return Math.min(...arr); // Uses spread operator with Math.min to return lowest numeric value in array
} // Closes findSmallest function scope
console.log(findSmallest([30, 45, 60, 7])); // Calls function with array argument and prints returned minimum value

// Q2: Function that will return your string in Alphabetical order.
function AlphabeticalOrder(str) {
  // Declares function accepting string parameter str
  return str.split("").sort().join(""); // Splits string to char array, sorts alphabetically, and joins back to string
} // Closes AlphabeticalOrder function scope
console.log(AlphabeticalOrder("hello")); // Calls function with string argument and prints sorted result string

// Q3: Function to calculate the factorial of a given non-negative integer.
function factorial(n) {
  // Declares recursive function accepting non-negative integer n
  if (n === 0 || n === 1) return 1; // Base case: returns 1 when n is 0 or 1
  return n * factorial(n - 1); // Recursive case: multiplies n by result of factorial(n - 1)
} // Closes factorial function scope
console.log(factorial(8)); // Calls function with integer 8 and prints computed factorial value

// Q4: Write a function that lets you know if a number is Even or Odd.
function oddOrEven(num) {
  // Declares function accepting numeric parameter num
  return num % 2 === 0 ? "Even" : "Odd"; // Checks remainder when divided by 2 using ternary operator
} // Closes oddOrEven function scope
console.log(oddOrEven(9)); // Calls function with number 9 and prints evaluation result string

// Q5: Return the sum of a number going back to its root.
function addUp(num) {
  // Declares function accepting number parameter num
  let sum = 0; // Initializes accumulator sum variable to 0
  for (let i = num; i >= 0; i--) {
    // Loops counter variable i backwards from num down to 0
    sum += i; // Adds current counter value i to running sum accumulator
  } // Closes addition loop scope
  return sum; // Returns calculated total sum value
} // Closes addUp function scope
console.log(addUp(8)); // Calls function with input 8 and prints calculated total sum

// Q6: Accept an array and return [lowest, highest, length, average].
function minMaxLengthAverage(arr) {
  // Declares function accepting array parameter arr
  const min = Math.min(...arr); // Finds lowest numeric value in array using spread operator
  const max = Math.max(...arr); // Finds highest numeric value in array using spread operator
  const length = arr.length; // Gets total number of elements in array
  const sum = arr.reduce((total, val) => total + val, 0); // Accumulates sum of all elements using reduce method
  const avg = sum / length; // Computes average by dividing total sum by array length
  return [min, max, length, avg]; // Constructs and returns array containing all calculated criteria values
} // Closes minMaxLengthAverage function scope
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // Calls function with sample array and prints criteria result array

// Q7: Return how many words were given in a string.
function countWords(str) {
  // Declares function accepting string parameter str
  return str.trim().split(/\s+/).length; // Trims outer spaces, splits by space regex, and returns array element length
} // Closes countWords function scope
console.log(countWords("hello from CodingAcademy!")); // Calls function with string argument and prints word count

// Q8: Create function to Multiply all elements in an array by its length.
function MultiplyByLength(arr) {
  // Declares function accepting array parameter arr
  const len = arr.length; // Retrieves total length count of input array
  return arr.map((item) => item * len); // Uses map method to return new array with each element multiplied by len
} // Closes MultiplyByLength function scope
console.log(MultiplyByLength([4, 2, 5])); // Calls function with sample array and prints resulting multiplied array

// Q9: Create a function that will check if str1 ends with the characters in str2.
function checkEnding(str1, str2) {
  // Declares function accepting two string parameters str1 and str2
  return str1.endsWith(str2); // Uses built-in endsWith method to check if str1 ends with substring str2
} // Closes checkEnding function scope
console.log(checkEnding("CodingSchool", "Ac")); // Calls function with test strings and prints boolean match result

// Q10: Create a function that will repeat each string character two times.
function doubleChar(str) {
  // Declares function accepting string parameter str
  return str
    .split("")
    .map((char) => char + char)
    .join(""); // Splits into chars, duplicates each via map, and joins back to string
} // Closes doubleChar function scope
console.log(doubleChar("Coding")); // Calls function with string argument and prints doubled-character string

// Q11: Return the index location of an element from a given array.
function findIndex(arr, element) {
  // Declares function accepting target array and element to search for
  return arr.indexOf(element); // Uses indexOf method to return first matching index position of element
} // Closes findIndex function scope
console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali")); // Calls function with array and target element, prints index
