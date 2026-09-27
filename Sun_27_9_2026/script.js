// ==========================================
// EXERCISE 1: Hoisting & Scoping Challenge
// ==========================================

console.log(typeof name !== 'undefined' ? name : undefined); // Logs undefined due to var hoisting[cite: 1]
var name = "Jone"; // Declares name and assigns "Jone"[cite: 1]

function test() { // Declares function test[cite: 1]
    var x = 10; // Declares local variable x with function scope[cite: 1]
    if (true) { // Standard true conditional block[cite: 1]
        var y = 20; // Declares y using var (function-scoped, accessible throughout test)[cite: 1]
    } // Ends if block
    console.log(y); // Logs 20 because y is hoisted to the top of function test[cite: 1]
} // Ends function test

test(); // Invokes test function, which logs 20[cite: 1]

// Fixed and rewritten using let/const for proper block scoping:
let personName = "Jone"; // Block-scoped variable initialization using let[cite: 1]

function testFixed() { // Declares rewritten test function[cite: 1]
    const x = 10; // Block-scoped constant declaration[cite: 1]
    let y; // Declares y at the function/block level scope needed
    if (true) { // True conditional block
        y = 20; // Assigns value to y inside the block
    } // Ends block
    console.log(y); // Safely logs 20
} // Ends testFixed function

testFixed(); // Executes fixed function


// ==========================================
// EXERCISE 2: Constructor Functions & Prototypal Inheritance
// ==========================================

function Person(name, age) { // Creates Person constructor function[cite: 1]
    this.name = name; // Assigns name property to the instance[cite: 1]
    this.age = age; // Assigns age property to the instance[cite: 1]
} // Ends Person constructor

Person.prototype.greet = function() { // Adds greet method to Person prototype[cite: 1]
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old."; // Returns greeting string
}; // Ends greet method

function Employee(name, age, employeeId, position) { // Creates Employee constructor function[cite: 1]
    Person.call(this, name, age); // Calls Person constructor to inherit name and age[cite: 1]
    this.employeeId = employeeId; // Assigns employeeId property to the instance[cite: 1]
    this.position = position; // Assigns position property to the instance[cite: 1]
} // Ends Employee constructor

Employee.prototype = Object.create(Person.prototype); // Sets Employee prototype to inherit from Person prototype[cite: 1]
Employee.prototype.constructor = Employee; // Resets constructor property reference back to Employee

Employee.prototype.greet = function() { // Overrides greet method on Employee prototype[cite: 1]
    return "Hello, I am " + this.name + ", working as a " + this.position + " (ID: " + this.employeeId + ")."; // Returns custom employee greeting
}; // Ends overridden greet method

var emp1 = new Employee("Alice", 30, "E101", "Developer"); // Instantiates first employee[cite: 1]
var emp2 = new Employee("Bob", 25, "E102", "Designer"); // Instantiates second employee[cite: 1]
var emp3 = new Employee("Charlie", 40, "E103", "Manager"); // Instantiates third employee[cite: 1]

console.log(emp1.greet()); // Calls overridden method on emp1[cite: 1]
console.log(emp2.greet()); // Calls overridden method on emp2[cite: 1]
console.log(emp3.greet()); // Calls overridden method on emp3[cite: 1]


// ==========================================
// EXERCISE 3: Array Methods Playground
// ==========================================

var groupA = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Mallory", "Niaj", "Olivia", "Peggy", "Rupert", "Sybil", "Trent", "Victor", "Walter", "Xavier", "Yvonne", "Zelda", "Arthur", "Brian", "Clara"]; // Creates first list of 25 students[cite: 1]
var groupB = ["Dan", "Evelyn", "Fiona", "George", "Hannah", "Ian", "Julia", "Kevin", "Laura", "Mike", "Nina", "Oscar", "Paul", "Queen", "Rose", "Sam", "Tom", "Ulysses", "Violet", "Will", "Xena", "Yusuf", "Zach", "Amy", "Ben"]; // Creates second list of 25 students[cite: 1]

var allStudents = groupA.concat(groupB); // Combines two student arrays using concat() into a 50-student list[cite: 1]

allStudents.sort(); // Sorts all student names in alphabetical order[cite: 1]

allStudents.reverse(); // Reverses the alphabetical sorted order of the student array[cite: 1]

var hasAlice = allStudents.includes("Alice"); // Checks if "Alice" exists in the student list returning true/false[cite: 1]
console.log("Is Alice in the list?:", hasAlice); // Prints the result of the includes check

allStudents.forEach(function(student, index) { // Iterates over every student in the array using forEach()[cite: 1]
    console.log(index + ": " + student); // Prints the index and name of each student[cite: 1]
}); // Ends forEach loop


// ==========================================
// EXERCISE 4: Student Records Manager
// ==========================================

var students = Array.from({ length: 50 }, function(_, i) { // Generates an array with 50 elements[cite: 1]
    return { id: i + 1, name: "Student_" + (i + 1), grade: Math.floor(Math.random() * 41) + 60 }; // Returns student object with id, name, and random grade (60-100)[cite: 1]
}); // Ends student object generation

students.splice(0, 1); // Removes the first student using splice()[cite: 1]
students.splice(0, 0, { id: 999, name: "New Student", grade: 95 }); // Adds a new student at index 0 using splice()[cite: 1]
students.splice(1, 1, { id: 2, name: "Replaced Student", grade: 88 }); // Replaces student at index 1 using splice()[cite: 1]

var topStudents = students.slice(0, 10); // Creates a shallow copy of the first 10 students using slice()[cite: 1]

students.sort(function(a, b) { // Sorts students array based on grade property[cite: 1]
    return b.grade - a.grade; // Orders grades from highest to lowest
}); // Ends sort callback

students.forEach(function(student) { // Loops through each student in the sorted array[cite: 1]
    console.log("ID: " + student.id + " | Name: " + student.name + " | Grade: " + student.grade); // Prints student record details[cite: 1]
}); // Ends forEach loop


// ==========================================
// EXERCISE 5: JSON Converter
// ==========================================

var product = { // Defines product object[cite: 1]
    id: 101, // Assigns numeric ID property[cite: 1]
    name: "Wireless Headphones", // Assigns string name property[cite: 1]
    price: 99.99, // Assigns numeric price property[cite: 1]
    category: "Electronics", // Assigns string category property[cite: 1]
    available: true // Assigns boolean available property[cite: 1]
}; // Ends product object definition

var jsonString = JSON.stringify(product); // Serializes product object into JSON string format[cite: 1]
console.log("Serialized JSON String:", jsonString); // Logs JSON string representation

try { // Initializes try block for safely parsing JSON[cite: 1]
    var parsedProduct = JSON.parse(jsonString); // Deserializes JSON string back into a JavaScript object[cite: 1]
    console.log("Original Object:", product); // Displays original object[cite: 1]
    console.log("Converted Object:", parsedProduct); // Displays parsed object[cite: 1]
} catch (error) { // Catches JSON parsing errors if string format is invalid[cite: 1]
    console.error("Failed to parse JSON string:", error.message); // Logs error message
} // Ends try...catch block


// ==========================================
// EXERCISE 6: Product Inventory Analyzer
// ==========================================

var inventoryGroup1 = [ // Defines first array of products[cite: 1]
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", quantity: 10 }, // Defines product 1[cite: 1]
    { id: 2, name: "Phone", price: 800, category: "Electronics", quantity: 15 }, // Defines product 2[cite: 1]
    { id: 3, name: "Desk", price: 300, category: "Furniture", quantity: 5 }, // Defines product 3[cite: 1]
    { id: 4, name: "Chair", price: 150, category: "Furniture", quantity: 20 }, // Defines product 4[cite: 1]
    { id: 5, name: "Monitor", price: 250, category: "Electronics", quantity: 8 } // Defines product 5[cite: 1]
]; // Ends inventoryGroup1

var inventoryGroup2 = [ // Defines second array of products[cite: 1]
    { id: 6, name: "Keyboard", price: 50, category: "Accessories", quantity: 30 }, // Defines product 6[cite: 1]
    { id: 7, name: "Mouse", price: 30, category: "Accessories", quantity: 25 }, // Defines product 7[cite: 1]
    { id: 8, name: "Headset", price: 100, category: "Accessories", quantity: 12 }, // Defines product 8[cite: 1]
    { id: 9, name: "Lamp", price: 40, category: "Furniture", quantity: 18 }, // Defines product 9[cite: 1]
    { id: 10, name: "Webcam", price: 70, category: "Electronics", quantity: 14 } // Defines product 10[cite: 1]
]; // Ends inventoryGroup2

var fullInventory = inventoryGroup1.concat(inventoryGroup2); // Merges both inventory arrays into one using concat()[cite: 1]

fullInventory.sort(function(a, b) { // Sorts product array by price[cite: 1]
    return a.price - b.price; // Orders products from lowest to highest price
}); // Ends sort callback

var categories = ["Electronics", "Furniture", "Accessories"]; // Defines list of valid categories[cite: 1]
var checkCategory = categories.includes("Electronics"); // Checks whether "Electronics" exists in categories list using includes()[cite: 1]
console.log("Is 'Electronics' a valid category?:", checkCategory); // Logs result of includes check

fullInventory.splice(2, 1); // Removes discontinued product at index 2 using splice()[cite: 1]

var firstFiveProducts = fullInventory.slice(0, 5); // Extracts first five products from array using slice()[cite: 1]
console.log("First 5 Products:", firstFiveProducts); // Logs slice result


// ==========================================
// EXERCISE 7: Arrow Function Transformation
// ==========================================

const square = num => num * num; // Arrow function that calculates and returns square of a number[cite: 1]

const isEven = num => num % 2 === 0; // Arrow function that checks if a number is even returning true/false[cite: 1]

const calculateTotal = products => products.reduce((sum, item) => sum + item.price, 0); // Arrow function using reduce to calculate total price[cite: 1]

const numbers = [1, 2, 3, 4, 5, 6]; // Initializes array of numbers for map/filter demonstration
const itemPrices = [{ price: 10 }, { price: 20 }, { price: 30 }]; // Initializes array of product price objects

const squaredNumbers = numbers.map(num => square(num)); // Uses map() with arrow function to square all array items[cite: 1]
const evenNumbers = numbers.filter(num => isEven(num)); // Uses filter() with arrow function to keep only even numbers[cite: 1]
const totalPrice = calculateTotal(itemPrices); // Calculates total product price using total function[cite: 1]

console.log("Squared:", squaredNumbers); // Logs squared numbers array
console.log("Evens:", evenNumbers); // Logs filtered even numbers array
console.log("Total Price:", totalPrice); // Logs calculated total price


// ==========================================
// EXERCISE 8: Destructuring & Default Parameters
// ==========================================

const userProfile = { // Declares object containing user profile details[cite: 1]
    name: "Sarah Connor", // User's name property[cite: 1]
    email: "sarah@terminator.com", // User's email property[cite: 1]
    age: 29, // User's age property[cite: 1]
    address: "Los Angeles, CA" // User's address property[cite: 1]
}; // Ends userProfile object

const { name: fullName, email, age, address } = userProfile; // Extracts values using object destructuring and renames name to fullName[cite: 1]
console.log(`User: ${fullName}, Email: ${email}, Age: ${age}, Address: ${address}`); // Prints extracted properties

const skillsList = ["JavaScript", "React", "Node.js", "MongoDB"]; // Initializes array of skills[cite: 1]
const [primarySkill, secondarySkill, ...otherSkills] = skillsList; // Extracts skills using array destructuring and rest operator[cite: 1]
console.log(`Primary: ${primarySkill}, Secondary: ${secondarySkill}`); // Prints extracted primary and secondary skills

function createUser(username = "Guest", role = "Viewer", status = "Active") { // Creates function with default parameter values[cite: 1]
    return { username, role, status }; // Returns object constructed from arguments
} // Ends createUser function

console.log("Default User:", createUser()); // Calls function omitting all optional arguments to display default fallback values[cite: 1]
console.log("Custom User:", createUser("Alice123", "Admin")); // Calls function overriding username and role while retaining default status


// ==========================================
// EXERCISE 9: Spread, Rest, Map & Set Challenge
// ==========================================

const classA = ["S101", "S102", "S103"]; // Array of enrolled student IDs from Class A[cite: 1]
const classB = ["S103", "S104", "S105"]; // Array of enrolled student IDs from Class B (contains duplicate S103)[cite: 1]

const combinedStudents = [...classA, ...classB]; // Combines both student arrays using the spread operator[cite: 1]

const calculateAverageGrade = (...grades) => { // Uses rest parameter to collect any number of grade arguments into an array[cite: 1]
    const sum = grades.reduce((acc, curr) => acc + curr, 0); // Sums up all grade elements
    return grades.length ? sum / grades.length : 0; // Calculates and returns average grade or 0 if array is empty[cite: 1]
}; // Ends calculateAverageGrade function

console.log("Average Grade:", calculateAverageGrade(85, 90, 78, 92)); // Tests calculateAverageGrade function

const uniqueStudentIDs = new Set(combinedStudents); // Passes combined list to Set constructor to automatically remove duplicates[cite: 1]
console.log("Unique Student IDs:", Array.from(uniqueStudentIDs)); // Converts Set to array and prints unique IDs

const studentGradeMap = new Map(); // Instantiates a new Map to store student ID and grade associations[cite: 1]
studentGradeMap.set("S101", 88); // Adds student S101 with grade 88 to Map[cite: 1]
studentGradeMap.set("S102", 95); // Adds student S102 with grade 95 to Map[cite: 1]
studentGradeMap.set("S103", 72); // Adds student S103 with grade 72 to Map[cite: 1]

studentGradeMap.set("S103", 79); // Updates grade for student S103 in Map[cite: 1]

console.log("S102 Grade:", studentGradeMap.get("S102")); // Retrieves and prints grade for student S102 from Map[cite: 1]

studentGradeMap.delete("S101"); // Deletes record for student S101 from Map[cite: 1]

const studentDataArray = Array.from(studentGradeMap, ([id, grade]) => ({ id, grade })); // Converts Map key-value entries into regular array of objects[cite: 1]
console.log("Final Student Array Data:", studentDataArray); // Displays final formatted array data[cite: 1]


// ==========================================
// EXERCISE 10: Dynamic Student Report
// ==========================================

const studentList = [ // Creates array of student objects[cite: 1]
    { id: 1, name: "John", grade: 85 }, // Student object 1[cite: 1]
    { id: 2, name: "Jane", grade: 45 }, // Student object 2[cite: 1]
    { id: 3, name: "Alex", grade: 92 }, // Student object 3[cite: 1]
    { id: 4, name: "Emily", grade: 58 }, // Student object 4[cite: 1]
    { id: 5, name: "Michael", grade: 76 } // Student object 5[cite: 1]
]; // Ends studentList array

if (typeof document !== 'undefined') { // Checks if running in a browser environment with DOM access
    const reportsContainer = document.createElement("div"); // Creates wrapper container div element for DOM insertion[cite: 1]
    reportsContainer.id = "reports-container"; // Sets ID for the container div
    document.body.appendChild(reportsContainer); // Appends container to HTML document body[cite: 1]

    studentList.forEach(student => { // Loops through each student in array[cite: 1]
        const isPassing = student.grade >= 60; // Determines passing status based on grade threshold of 60[cite: 1]
        const reportCard = `
            <div class="report-card" style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
                <h3>Student Report: ${student.name}</h3>
                <p><strong>ID:</strong> ${student.id}</p>
                <p><strong>Grade:</strong> ${student.grade}%</p>
                <p><strong>Status:</strong> ${isPassing ? "PASSED" : "FAILED"}</p>
            </div>
        `; // Generates multiline HTML report markup using template literals[cite: 1]
        reportsContainer.innerHTML += reportCard; // Injects multiline template literal string directly into DOM container[cite: 1]
    }); // Ends forEach loop
}


// ==========================================
// EXERCISE 11: Classes & Inheritance
// ==========================================

class PersonClass { // Defines parent PersonClass[cite: 1]
    constructor(name, email) { // Constructor for PersonClass[cite: 1]
        this.name = name; // Assigns name property[cite: 1]
        this.email = email; // Assigns email property[cite: 1]
    } // Ends constructor

    getInfo() { // Method to return basic person details[cite: 1]
        return `Name: ${this.name}, Email: ${this.email}`; // Returns template literal string
    } // Ends getInfo method
} // Ends PersonClass

class StudentClass extends PersonClass { // Defines StudentClass extending PersonClass[cite: 1]
    constructor(name, email, studentId) { // Constructor for StudentClass[cite: 1]
        super(name, email); // Calls super constructor to initialize parent properties[cite: 1]
        this.studentId = studentId; // Assigns unique studentId property
    } // Ends constructor

    getInfo() { // Overrides getInfo method from PersonClass[cite: 1]
        return `${super.getInfo()}, Student ID: ${this.studentId}`; // Calls super.getInfo() and appends studentId
    } // Ends overridden getInfo method
} // Ends StudentClass

class InstructorClass extends PersonClass { // Defines InstructorClass extending PersonClass[cite: 1]
    constructor(name, email, subject) { // Constructor for InstructorClass[cite: 1]
        super(name, email); // Calls super constructor to initialize parent properties[cite: 1]
        this.subject = subject; // Assigns teaching subject property
    } // Ends constructor

    getInfo() { // Overrides getInfo method from PersonClass[cite: 1]
        return `${super.getInfo()}, Teaching Subject: ${this.subject}`; // Calls super.getInfo() and appends subject
    } // Ends overridden getInfo method
} // Ends InstructorClass

const genericPerson = new PersonClass("Generic User", "user@univ.edu"); // Instantiates base PersonClass[cite: 1]
const studentInstance = new StudentClass("David", "david@univ.edu", "ST-998"); // Instantiates StudentClass[cite: 1]
const instructorInstance = new InstructorClass("Dr. Smith", "smith@univ.edu", "Computer Science"); // Instantiates InstructorClass[cite: 1]

console.log(genericPerson.getInfo()); // Logs base PersonClass getInfo output[cite: 1]
console.log(studentInstance.getInfo()); // Logs overridden StudentClass getInfo output demonstrating inheritance[cite: 1]
console.log(instructorInstance.getInfo()); // Logs overridden InstructorClass getInfo output demonstrating inheritance[cite: 1]


// ==========================================
// EXERCISE 12: Modules (Simulated Inline)
// ==========================================

const StudentsModule = (function() { // Module wrapper for students.js logic[cite: 1]
    const studentList = [ // Named export equivalent of student list array[cite: 1]
        { id: 1, name: "Alice", grade: 88 }, // Student entry 1[cite: 1]
        { id: 2, name: "Bob", grade: 94 } // Student entry 2[cite: 1]
    ]; // Ends studentList array

    function getStudentNames(students) { // Named export equivalent of utility function[cite: 1]
        return students.map(s => s.name); // Returns array containing student names
    } // Ends getStudentNames function

    function getDefaultStudent() { // Default export equivalent function[cite: 1]
        return studentList[0]; // Returns default/first student from list
    } // Ends default export function

    return { studentList, getStudentNames, getDefaultStudent }; // Exports public interfaces
})(); // Ends StudentsModule IIFE

const GradesModule = (function() { // Module wrapper for grades.js logic[cite: 1]
    function calculateAverage(students) { // Named export equivalent function[cite: 1]
        const total = students.reduce((acc, curr) => acc + curr.grade, 0); // Accumulates sum of all student grades[cite: 1]
        return total / students.length; // Calculates and returns average grade score[cite: 1]
    } // Ends calculateAverage function

    return { calculateAverage }; // Exports public interfaces
})(); // Ends GradesModule IIFE

const averageGrade = GradesModule.calculateAverage(StudentsModule.studentList); // Calculates class average using modules
const defaultStudent = StudentsModule.getDefaultStudent(); // Gets default student using modules
console.log("Module App - Default Student:", defaultStudent.name); // Logs result
console.log("Module App - Class Average:", averageGrade.toFixed(2)); // Logs result


// ==========================================
// EXERCISE 13: Web Storage Methods
// ==========================================

if (typeof localStorage !== 'undefined') { // Ensures Web Storage API is supported in environment
    localStorage.setItem("appName", "StoragePlayground"); // Saves key-value pair into localStorage using setItem()[cite: 1]
    localStorage.setItem("version", "1.0.0"); // Saves second key-value pair into localStorage using setItem()[cite: 1]

    const appName = localStorage.getItem("appName"); // Retrieves stored value for key "appName" using getItem()[cite: 1]
    console.log("Retrieved App Name:", appName); // Logs retrieved item value

    localStorage.removeItem("version"); // Removes specific key-value pair ("version") using removeItem()[cite: 1]

    const totalStoredItems = localStorage.length; // Obtains current count of stored entries using length property[cite: 1]
    console.log("Total items stored:", totalStoredItems); // Logs total stored count

    if (totalStoredItems > 0) { // Validates if entries exist in storage
        const firstKey = localStorage.key(0); // Retrieves key name at index 0 using key()[cite: 1]
        console.log("Key at index 0:", firstKey); // Logs key retrieved by index
    } // Ends conditional check

    localStorage.clear(); // Clears all key-value entries stored in localStorage for the current domain origin[cite: 1]
}


// ==========================================
// EXERCISE 14: Local Storage To-Do List
// ==========================================

const TODO_STORAGE_KEY = "todo_tasks"; // Defines constant key string used for localStorage operations[cite: 1]

function getStoredTasks() { // Helper function to retrieve and parse tasks from localStorage[cite: 1]
    if (typeof localStorage === 'undefined') return []; // Fallback for non-browser environments
    const stored = localStorage.getItem(TODO_STORAGE_KEY); // Reads stored raw task string from localStorage[cite: 1]
    return stored ? JSON.parse(stored) : []; // Parses JSON string back to array or returns empty array if null[cite: 1]
} // Ends getStoredTasks function

function saveTasks(tasks) { // Helper function to serialize and persist tasks array to localStorage[cite: 1]
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks)); // Serializes array to JSON string and writes to localStorage[cite: 1]
    }
} // Ends saveTasks function

function addTask(taskText) { // Function to add a new task item[cite: 1]
    const tasks = getStoredTasks(); // Retrieves current task list from storage
    tasks.push({ id: Date.now(), text: taskText, completed: false }); // Appends new task object with timestamp ID
    saveTasks(tasks); // Persists updated array back to storage
} // Ends addTask function

function toggleTaskComplete(taskId) { // Function to mark tasks as completed or pending[cite: 1]
    const tasks = getStoredTasks(); // Retrieves current task list
    const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task); // Toggles completion status matching ID
    saveTasks(updatedTasks); // Saves updated tasks list
} // Ends toggleTaskComplete function

function deleteTask(taskId) { // Function to delete individual tasks by ID[cite: 1]
    const tasks = getStoredTasks(); // Retrieves existing task list
    const filteredTasks = tasks.filter(task => task.id !== taskId); // Filters out task matching provided ID
    saveTasks(filteredTasks); // Saves remaining tasks to storage
} // Ends deleteTask function

function clearAllTasks() { // Function associated with clear button action[cite: 1]
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(TODO_STORAGE_KEY); // Deletes tasks array entry from localStorage[cite: 1]
    }
} // Ends clearAllTasks function

addTask("Learn JavaScript ES6"); // Demonstrates adding task 1
addTask("Build To-Do App"); // Demonstrates adding task 2


// ==========================================
// EXERCISE 18: Session Storage Multi-Step Form
// ==========================================

const STEP_KEY = "multi_step_form_step"; // Key string constant for current step state in sessionStorage[cite: 1]
const DATA_KEY = "multi_step_form_data"; // Key string constant for form input data in sessionStorage[cite: 1]

function getFormState() { // Retrieves form state object stored in sessionStorage[cite: 1]
    if (typeof sessionStorage === 'undefined') return { step: 1, personalInfo: {}, educationalInfo: {} }; // Fallback
    const data = sessionStorage.getItem(DATA_KEY); // Reads data string from sessionStorage[cite: 1]
    return data ? JSON.parse(data) : { step: 1, personalInfo: {}, educationalInfo: {} }; // Parses object or returns defaults[cite: 1]
} // Ends getFormState function

function saveFormState(state) { // Persists updated state object into sessionStorage[cite: 1]
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(DATA_KEY, JSON.stringify(state)); // Serializes and stores form state object[cite: 1]
        sessionStorage.setItem(STEP_KEY, state.step); // Updates dedicated step index key in sessionStorage[cite: 1]
    }
} // Ends saveFormState function

function saveStep1Personal(name, age) { // Saves Step 1 inputs[cite: 1]
    const state = getFormState(); // Loads existing form state
    state.personalInfo = { name, age }; // Assigns personal information[cite: 1]
    state.step = 2; // Advances to Step 2 automatically
    saveFormState(state); // Saves progress into sessionStorage[cite: 1]
} // Ends saveStep1Personal function

function saveStep2Education(degree, university) { // Saves Step 2 inputs[cite: 1]
    const state = getFormState(); // Loads existing form state
    state.educationalInfo = { degree, university }; // Assigns educational information[cite: 1]
    state.step = 3; // Advances to Step 3 (Review & Confirm)[cite: 1]
    saveFormState(state); // Saves progress into sessionStorage[cite: 1]
} // Ends saveStep2Education function

function navigateToStep(stepNumber) { // Allows user to navigate forward or backward between steps[cite: 1]
    if (stepNumber >= 1 && stepNumber <= 3) { // Validates target step index bounds
        const state = getFormState(); // Fetches current state
        state.step = stepNumber; // Updates step index property
        saveFormState(state); // Persists restored step to sessionStorage
    } // Ends boundary check
} // Ends navigateToStep function

saveStep1Personal("Alice", 24); // Simulates filling Step 1
saveStep2Education("B.Sc. Computer Science", "MIT"); // Simulates filling Step 2


// ==========================================
// EXERCISE 19: Cookies & Preferences Manager
// ==========================================

function setCookie(name, value, daysToExpire) { // Defines function to set a cookie with key, value, and expiration days[cite: 1]
    if (typeof document === 'undefined') return; // Validates browser context
    const date = new Date(); // Creates new Date object initialized to current time
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000)); // Calculates future expiration timestamp in milliseconds
    const expires = "expires=" + date.toUTCString(); // Formats expiration time to standard UTC string
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`; // Sets document cookie with path and expiration[cite: 1]
} // Ends setCookie function

function getCookie(name) { // Defines function to read a cookie value by name[cite: 1]
    if (typeof document === 'undefined') return null; // Validates browser context
    const nameEQ = name + "="; // Prepares lookup name string with assignment operator
    const ca = document.cookie.split(';'); // Splits document.cookie string into individual cookie key-value segments[cite: 1]
    for (let i = 0; i < ca.length; i++) { // Loops through each available cookie segment
        let c = ca[i].trim(); // Trims leading/trailing whitespace from cookie string segment
        if (c.indexOf(nameEQ) === 0) { // Checks if target cookie name exists at start of string segment
            return decodeURIComponent(c.substring(nameEQ.length, c.length)); // Returns decoded cookie value string
        } // Ends string match check
    } // Ends loop through cookies
    return null; // Returns null if target cookie name is not found
} // Ends getCookie function

function deleteCookie(name) { // Defines function to delete a cookie by forcing immediate expiration[cite: 1]
    if (typeof document === 'undefined') return; // Validates browser context
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // Overwrites cookie with past date to clear it[cite: 1]
} // Ends deleteCookie function

function saveThemePreference(theme) { // Function to save theme preference setting[cite: 1]
    setCookie("pref_theme", theme, 30); // Sets theme cookie ("light" or "dark") expiring in 30 days[cite: 1]
} // Ends saveThemePreference function

function saveLanguagePreference(language) { // Function to save language preference setting[cite: 1]
    setCookie("pref_lang", language, 30); // Sets language cookie ("English" or "Arabic") expiring in 30 days[cite: 1]
} // Ends saveLanguagePreference function

saveThemePreference("dark"); // Sets theme preference cookie to "dark"
saveLanguagePreference("Arabic"); // Sets language preference cookie to "Arabic"