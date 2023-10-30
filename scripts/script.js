// 1. To Print something into the console
console.log("Hello World!");

// This is line comment

/*
This is a block
comment
*/

/**
 * The shop keeper approach
 */

/**
 * Naming: To name and refer something
 * Variable naming should
 * 1. camelCase
 * 2. start with alphabets, _, $
 * 3. no spaces in between
 * 4. no special characters [*%#-!(){}|\/] in the identifier
 */

// Constants
const fruitName = "Apple";

// Variables, initial capacity
let appleCapacity;

console.log({ appleCapacity });

console.log("Type of appleCapacity", typeof appleCapacity);

appleCapacity = 150; // 150 apples

const FRUIT_NAME = "Apple"; // constants should be in SCREAMING_SNAKE_CASE

console.log({ fruitName, FRUIT_NAME });

let applePrice = 20; // INR

console.log({ applePrice });

// price dropped to 15
applePrice = 15;

console.log({ applePrice });

// current capacity
appleCapacity = 100; // 100 apples

/**
 * New Customer: Lavanya
 */

const customerName = "Lavanya";

console.log("Type of customerName", typeof customerName);

const quanityOfApplesRequired = 6;

console.log("Type of quanityOfApplesRequired", typeof quanityOfApplesRequired);

// Selling price of apples required
const sellingPriceOfRequiredQuanity = applePrice * quanityOfApplesRequired;

console.log({
  customerName,
  quanityOfApplesRequired,
  sellingPriceOfRequiredQuanity,
});

// Customer asked for discount

const discountNegotiated = 30; // 30%

// Final Price of Apples
const finalPrice =
  sellingPriceOfRequiredQuanity -
  (discountNegotiated / 100) * sellingPriceOfRequiredQuanity;

console.log({ finalPrice });

/**
 * Lavanya (Customer) bought the Apples for 63 /-
 */
appleCapacity = appleCapacity - quanityOfApplesRequired; // 100 - 6 = 94
applePrice = applePrice - 3; // 15 - 3 = 12
const isApplesAvailable = appleCapacity > 0; // true

console.log({ appleCapacity, applePrice, isApplesAvailable });

/**
 * Data types
 */

/**
 * Data types
 * Primitve Data Types
 *  1. string
 *  2. number
 *  3. boolean : (true | false)
 *  4. undefined
 *  5. null
 */

/**
 * Shop Keeper became big
 * Added oranges, mangos, papaya to his shop
 */

const fruitNames = ["Apple", "Orange", "Mango", "Papaya", "Dragon Fruit"];
const fruitPrices = [12, 10, 20, 30, 80];

console.log({ fruitNames, fruitPrices });

const apple = fruitNames[0];
const appleFruitPrice = fruitPrices[0];
const mango = fruitNames[2];
const mangoFruitPrice = fruitPrices[2];

console.log({ apple, appleFruitPrice, mango, mangoFruitPrice });

console.log("Total number of fruit types", fruitNames.length);

for (let i = 0; i < fruitNames.length; i = i + 1) {
  const fruitName = fruitNames[i];
  const fruitPrice = fruitPrices[i];
  console.log({ i, fruitName, fruitPrice });
}

const fruits = [];

const appleObject = {
  name: "Apple",
  price: 12,
  quantity: 94,
  type: "Simla",
};

const orangeObject = {
  name: "Orange",
  price: 10,
  quantity: 100,
  type: "Nagpur",
};

const pineAppleObject = {
  name: "Pine Apple",
  price: 10,
  quantity: 100,
  type: "Nagpur",
};

fruits.push(appleObject);
fruits.push(orangeObject);

console.log({ fruits });

fruits.push({
  name: "Mango",
  price: 20,
  quantity: 50,
  type: "Banginapalli",
});

fruits.push(
  { name: "Papaya", price: 30, quantity: 20, type: "Taiwan Red Lady" },
  { name: "Dragon Fruit", price: 80, quantity: 10, type: "Red" }
);

console.log({ fruits });

/**
 * Data types
 * Reference Data Types
 *  1. Array
 *  2. Object
 */

function funcName() {
  console.log("My First Function");
}

funcName();

function add(a, b) {
  return a + b;
}

console.log(add());

const addX = (a, b) => {
  return a + b;
};

//buttonEl.addEventListener("click", function () {});

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log(areaOfCircle(2));
console.log(areaOfCircle(4));
console.log(areaOfCircle(10));
console.log(areaOfCircle(1247));

function printNNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printEvenNumbers(n) {
  let i = 1;
  while (i <= n) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

//printNNumbers(10);
printEvenNumbers(10);
