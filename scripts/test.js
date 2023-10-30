function greetFn() {
  console.log("greetFn");
}

const greet = (name) => {
  console.log("greet");
};

const greetFn2 = function () {
  console.log("greetFn2");
};

//IIFE. Immediately Invoked Function Expressions
/**
 * Self Invoking Functions
 */

(() => {
  console.log("Hello IIFE");
})();
