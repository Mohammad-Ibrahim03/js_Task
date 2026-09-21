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

let arr=["Coding", "Academy", "By", "Orange"] ;
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
console.log(arr);



