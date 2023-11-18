// JavaScript

/**
 * Reserved keywords
 *
 * let, const, for, while, if, else, else if, switch,
 * class, function, return, break, continue, true, false, do,
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
 * Denoted by Square Braces
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
 * Denoted by Curley Brances {}
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
