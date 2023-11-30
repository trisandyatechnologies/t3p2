// JavaScript

/**
 * Reserved keywords
 *
 * let, const, for, while, if, else, else if, switch,
 * class, function, return, break, continue, true, false, do,
 * Array, Object,
 */

/**
 * Variable
 * Code Style: camelCase
 */
let studentName1 = "Pranav"; // String
let studentName2 = "Jhansi";

/**
 * Constant
 * Code Style: SNAKE_CASE
 */
const STUDENT_COUNT = 2; // Number

/**
 * Arrays
 * Series of index based values
 * Code Style: Based on the usage
 * Denoted by Square Braces [] | new Array();
 * Accessed using index
 */
const studentNames = ["Pranav", "Jhansi", "Vinay"]; // Array of strings

studentNames.push("Lavanya");
studentNames.push(undefined);
studentNames.push("👌");

studentNames[0]; // "Pranav"
studentNames[2]; // "Vinay"
studentNames[studentNames.length - 1]; // "👌"
studentNames[4]; // undefined
studentNames[4] = "Sai";

console.log({ studentNames });

/**
 * Objects
 * Key Value pairs
 * Code Style: Based on the usage
 * Denoted by Curley Brances {} | new Object()
 * Accessed using keys
 */
const studentPranav = {
  // JSON - JavaScript Object Notation
  name: "Pranav",
  qualification: "B-Tech",
  address: "JGPT",
  "current location": "PKPL",
  fullAddress: {
    village: "PKPL",
    street: "Jammichettu",
    mandal: "Mopidevi",
    pin: 521130,
    phones: [12345, 2234353556, 983254315254],
  },
};

const CURRENT_LOCATION = "current location";

studentPranav.qualification; // "B-Tech"
studentPranav.age; // undefined

studentPranav.age = 25;

studentPranav["address"]; // "JGPT"
studentPranav.address; // "JGPT"
studentPranav["current location"]; // "PKPL"
studentPranav[CURRENT_LOCATION]; // "PKPL"
studentPranav.age; // 25

studentPranav.fullAddress.phones[2]; // "983254315254"
studentPranav.fullAddress.pin; // 521130

// Real world example
const familyTree = [
  {
    name: "Grand father 1",
    wife: "Grand mother 1",
    children: [
      {
        name: "Father 1",
        wife: "Mother 1",
        children: [
          {
            name: "Sai",
          },
          {
            name: "Teja",
          },
        ],
      },
    ],
  },
];

familyTree[0].children[0].children[1].name; // "Teja"

/**
 * Date Types
 * https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/
 * 1. Primitve
 * 2. Reference
 */

/**
 * Primitive Data Types
 * https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 * 1. string - "Pranav" | 'Pranav'
 * 2. number - 25, 25.0, 0.25
 * 3. boolean - true | false
 * 4. undefined - undefined
 * 5. null -
 */

/**
 * Reference Data Types
 * 1. Array - [] - index based
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 2. Object - {} - key based
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

/**
 * Loops
 */

/**
 * For (let i = 0; i < 5; i++)
 */

// Print first 10 numbers
for (let i = 1; i < 10; i--) {
  console.log(i);
  if (i === -10) {
    break;
  }
}

// Nested For Loops
for (let i = 0; i < 5; i++) {
  // 5 times

  for (let j = 0; j < 5; j++) {
    // 5 times
    console.log("inner"); // 5 x 5 times
  }

  if (i % 2 === 0) {
    console.log("even"); // 3 times
  }
  console.log("outer"); // 5 times
}

/**
 * While (condition)
 */

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//While _/\_

/**
 * Functions
 * names should be camelCase()
 */

let x = 2;
let y = 3;

let z = x + y; // Expression [LHS = RHS]

z = add(x, y); // x and y are arguments, in function call

print(z); // z is argument, function call without assignment

// Performs a task and returns the output
function add(a, b) {
  // a and b are parameters
  return a + b;
}

// Performs some task (printing)
function print(...args) {
  console.log(...args);
}

function printFirst10Numbers() {
  let l = 1; // function scoped variable
  for (; i <= 10; i++) {
    //print(i);
    let b = 10; // for loop block scoped.
    console.log(i);
  }
}

printFirst10Numbers(); // function without parameters

/**
 * Types of functions
 */

//1. Named function
function addThis(a, b) {
  return a + b;
}
addThis(2, 3); // 5

//2. Fat arrow functions
const addThis2 = (a, b) => a + b;
addThis2(2, 3); // 5

//3. Anonymous function
document.addEventListener("click", () => {
  // Anonymous function or callback
});
// Fires when click happened on the document (html)

//4. Function Expressions
const addThis3 = function (a, b) {
  return a + b;
};
addThis3(2, 3); // 5

//5. IIFE (Immediately Invoked Function Expressions)
(function iife() {
  console.log("Prints without calling this function");
})();
