'use strict'

/*  @everyone 
Find the output for these expressions and justify the output according to JavaScript interpretation:
● typeof(100)
● typeof(73.9)
● typeof(NaN)
● typeof("Water")
● typeof(false)
● typeof(9 != 11)
● "Orang" + "e"
● "Orange" - "s"
● "4" + "8"
● "4" - "8"
● "name" + 3
● "name" - 3
● 82 * "word"
● 1 + "hello"
● "hello" + 1
● 1 + true
● "hello" + true
● typeof (Infinity)
● 1 == '1'
● 1 === '1'
*/

console.log(typeof(100));     // number
console.log(typeof(73.9));    // number
console.log(typeof(NaN));     // number
console.log(typeof("Water")); // string
console.log(typeof(false));   // boolean
console.log(typeof(9!=11));   // boolean

console.log("Orang"+"e");      // Orange
console.log("Orange"+"s");     // Oranges
console.log("4"+"8");          // 48
console.log("4"-"8");          // -4
console.log("name"+3);         // name3
console.log("name"-3);         // NaN
console.log(82*"word");        // NaN
console.log(1+"hello");        // 1hello
console.log("hello"+1);        // hello1
console.log(1+true);           // 2
console.log("hello"+true);     // hellotrue

console.log(typeof(Infinity)); // number
console.log(1=='1');           // true
console.log(1==='1');          // false



/* The Pdf file solution */

let cash=1000,current_liabilities=500  ;
console.log(cash/current_liabilities);

let revenues =1000,expenses=500;
console.log(cash-expenses)


let liabilities = 1000,equity=500;
console.log(liabilities+equity);

let profit=1000,sales=500;
console.log(profit*sales);

let num1=7,num2=9,num3=2;
console.log((num1+num2+num3)/3);

let price= 150, discount = 0.3;
console.log(price-price*discount);

let age = 20;
console.log((age>18 && age<30)?true:false);

let number1=2,number2=3;
console.log(Math.pow(number1,number2));

let numm1=10,numm2=4;
console.log(numm1%numm2);

let str="Welcome To Orange";
console.log(str.toUpperCase());
console.log(str.substring(8,10));
console.log(str.replace("Welcome To ","Hello from "));
console.log(str);
console.log(str.length);
console.log(str.replaceAll("Orange", `\"Orange\"`));
console.log(str.concat(" Jordan"))

let str2="cactus";
console.log(str2.charAt(0)+str2.slice(1).replaceAll(str2.charAt(0), '*'));

/* let arr=["Coding", "Academy", "By", "Orange"] ;
arr.push("Jordan");
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

arr.splice(0, 1, "“Welcome”");
arr.splice(1, 0, "To");
arr.splice(2, 0, "Coding");
arr.splice(4, 0, "By");
arr.splice(5, 0, "Orange");
console.log(arr); */

let arr = ["Coding", "Academy", "By", "Orange"];

// Output: ["Coding", "Academy", "By", "Orange", "Jordan"]
console.log([...arr, "Jordan"]);

// Output: ["Coding", "Academy"]
console.log(arr.slice(0, 2));

// Output: ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
console.log(["Welcome", "To", ...arr]);

// Output: ["Academy", "By", "Orange"]
console.log(arr.slice(1));

// Output: "Coding Academy By Orange"
console.log(arr.join(" "));

// Output: ["Coding", "Academy", "By", "Orange"]
console.log(arr);

// Output: ["Coding", "Orange"]
console.log([arr[0], arr[3]]);



var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array.
vegetables.pop();

// b. Remove the first item from the fruit array.
fruit.shift();

// c. Find the index of "orange."
let orangeIndex = fruit.indexOf("orange");

// d. Add that number to the end of the fruit array.
fruit.push(orangeIndex);

// e. Find the length of the vegetable array.
let vegLength = vegetables.length;

// f. Add that number to the end of the vegetable array.
vegetables.push(vegLength);

// g. Put the two arrays together into one array. Fruit first. Call the new Array "food".
let food = fruit.concat(vegetables);

// h. Remove 2 elements from your new array starting at index 4.
food.splice(4, 2);

// i. Reverse your array.
food.reverse();

// j. Turn the array into a string.
let foodString = food.join(",");

console.log(foodString);


// 1. Dynamic age calculation & eligibility
function checkEligibility(birthYear) {
  let currentYear = new Date().getFullYear();
  let userAge = currentYear - birthYear;

  if (userAge > 60) {
    console.log("You may join the seniors' program.");
  } else if (userAge > 30) {
    console.log("You are not eligible. You may join other programs.");
  } else if (userAge >= 18 && userAge <= 30) {
    console.log("You are eligible. Start your application.");
  } else {
    console.log("You may join the kids' program.");
  }
}

// 2. Switch case of letters
function swapCase(str) {
  return str.split('').map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}
console.log(swapCase("OrAnGe")); // oRaNgE

// 3. Camel Case (Capitalize each word & remove spaces)
function toCamelCase(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
}
console.log(toCamelCase("Coding Academy by Orange")); // CodingAcademyByOrange

// 4. Remove a specific element
function removeElement(arr, elem) {
  return arr.filter(item => item !== elem);
}
console.log(removeElement(["Coding", "Academy", "By", "Orange"], "By"));

// 5. Check odd or even
function checkOddEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 6. Check if variable is a number
function isNumber(val) {
  return typeof val === 'number' && !isNaN(val);
}

// 7. Largest of two numbers
function findLargest(a, b) {
  return Math.max(a, b);
}

// 8. Triangle type
function triangleType(a, b, c) {
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}

// 9. Number in range
function inRange(num, min, max) {
  return num >= min && num <= max;
}

// 10. Leap year check
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}



// 1. Print even numbers between 1 and 50, twice (1 for loop, 1 while loop)
for (let i = 2; i <= 50; i += 2) console.log(i);
let w = 2;
while (w <= 50) {
  console.log(w);
  w += 2;
}

// 2. Exercise 1 using a single for loop
for (let i = 2; i <= 100; i += 2) {
  console.log(i > 50 ? i - 50 : i);
}

// 3. Loop 1 prints evens, Loop 2 prints odds
for (let i = 2; i <= 50; i += 2) console.log("Even: " + i);
for (let i = 1; i < 50; i += 2) console.log("Odd: " + i);

// 4. FizzBuzz loop
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 5. FizzBuzz with function call per iteration
function fizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

// 6. Recursive FizzBuzz
function recursiveFizzBuzz(current, max) {
  if (current > max) return;
  console.log(fizzBuzz(current));
  recursiveFizzBuzz(current + 1, max);
}

// 7. Banknotes converter
function convertToBanknotes(amount, notes) {
  let result = [];
  for (let note of notes) {
    while (amount >= note) {
      result.push(note);
      amount -= note;
    }
  }
  return result.join(", ");
}
console.log(convertToBanknotes(57, [25, 10, 5, 1])); // 25, 25, 5, 1, 1

// 8. Count character occurrence (case insensitive)
function countChar(str, char) {
  let lowerStr = str.toLowerCase();
  let lowerChar = char.toLowerCase();
  let count = 0;
  for (let c of lowerStr) {
    if (c === lowerChar) count++;
  }
  return count;
}
console.log(countChar("Coding Academy by Orange", "o")); // 2

// 9. Specific loop tasks
// a. 0 - 20
for (let i = 0; i <= 20; i++) console.log(i);

// b. ODD values from 3 to 29
for (let i = 3; i <= 29; i += 2) console.log(i);

// c. EVEN numbers 12 down to -14
for (let i = 12; i >= -14; i -= 2) console.log(i);

// d. Multiples of 3 from 50 down to 20
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) console.log(i);
}

// 10. Iterating variables
let strVal = 'CodingAcademy';
let arrVal = [7, 500, 'KH404', 'black', 36];

// e. Print each element of array
for (let i = 0; i < arrVal.length; i++) console.log(arrVal[i]);

// f. Print each character in reverse
for (let i = strVal.length - 1; i >= 0; i--) console.log(strVal[i]);

// 11. Sort into evens and odds arrays
let numbers = [7, 23, 18, 9, 13, 38, 10, 12, 0, 124];
let evens = [];
let odds = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) evens.push(numbers[i]);
  else odds.push(numbers[i]);
}

// 12. Create meals
function generateMeals(numMeals) {
  let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
  let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
  let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
  let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
  let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

  let meals = [];
  for (let i = 0; i < numMeals; i++) {
    let meal = `${proteins[i % 6]}, ${grains[i % 6]}, ${vegetables[i % 6]}, ${beverages[i % 6]}, ${desserts[i % 6]}`;
    meals.push(meal);
  }
  return meals;
}


// 1. Get array of object's properties
function getProperties(obj) {
  return Object.keys(obj);
}

// 2. Get number of properties
function getPropertyCount(obj) {
  return Object.keys(obj).length;
}

// 3. Combine two objects
function combineObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// 4. Convert all string property values to uppercase
function uppercaseValues(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      newObj[key] = obj[key].toUpperCase();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 5. Filter out null values
function removeNullValues(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 6. Sorted property names
function getSortedKeys(obj) {
  return Object.keys(obj).sort();
}


// sheet two 
// --- Basic ---

// 1. Check if age is greater than 18
let agee = 27;
if (agee > 18) {
  console.log("You are an adult");
}

// 2. Check if num is divisible by 2
let num = 4;
if (num % 2 === 0) {
  console.log("The number is even");
}

// --- Mid ---

// 3. Check if char is a letter
let char = "a";
if (
  typeof char === "string" &&
  char.length === 1 &&
  ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
) {
  console.log("It's a letter");
}

// 4. Check if list is an array
let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}

// 5. Check if x is a positive number
let x = 5;
if (typeof x === "number" && x > 0) {
  console.log("x is a positive number");
}

// --- Advanced ---

// 9. Check if z is a multiple of 3
let z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}

// 10. Check if password is at least 8 characters long
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}

// 11. Check if age is between 18 and 65 (inclusive)
let workingAge = 30;
if (workingAge >= 18 && workingAge <= 65) {
  console.log("You are of working age");
}

// 12. Check if color is a primary color
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}

// 13. isValidNumber function using isNaN()
function isValidNumber(input) {
  if (!isNaN(input) && input !== "" && input !== null) {
    console.log(`"${input}" is a valid number`);
  } else {
    console.log(`"${input}" is not a number`);
  }
}

// Testing #13:
isValidNumber(11);      // "11 is a valid number"
isValidNumber("19");    // "19 is a valid number"
isValidNumber("xyz");   // "xyz is not a number"
isValidNumber("17.5");  // "17.5 is a valid number"
isValidNumber("21F");   // "21F is not a number"


