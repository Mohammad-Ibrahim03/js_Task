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




