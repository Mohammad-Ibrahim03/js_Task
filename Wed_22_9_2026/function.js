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
