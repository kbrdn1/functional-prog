import type { Operation } from "./types";

// Define basic arithmetic operations
export const add: Operation = (a) => (b) => a + b;
export const multiply: Operation = (a) => (b) => a * b;
export const divide: Operation = (a) => (b) => a / b;
export const subtract: Operation = (a) => (b) => a - b;

// Higher-order function to create a calculator for a given operation
export const calculator =
  (operation: Operation) => (a: number) => (b: number) =>
    operation(a)(b);

// Create specific calculators for each operation
const addOperation = calculator(add);
const subtractOperation = calculator(subtract);
const multiplyOperation = calculator(multiply);
const divideOperation = calculator(divide);

// Function to perform all operations and return results in an object
export const calculatorSuite = (a: number, b: number) => ({
  add: add(a)(b),
  divide: divide(a)(b),
  multiply: multiply(a)(b),
  subtract: subtract(a)(b),
});

const calc = calculatorSuite(10, 5);
console.log(calc.add); // Output the result of addition

// Compose multiple functions to create a new function
export const compose =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// String manipulation functions
export const toLowerCase = (x: string) => x.toLowerCase();
export const toReplaceSpaceWithDash = (x: string) => x.replace(/\s+/g, "-");

// Create a slugify function by composing string manipulation functions
export const slugify = compose(toReplaceSpaceWithDash, toLowerCase);

console.log(slugify("Hello World")); // Output: hello-world

// Array of operations
const operations = [add, subtract, multiply, divide];

// Function to apply all operations to two numbers and return the results in an array
export const superCalculatorArray =
  (operation: Operation[]) => (x: number) => (y: number) =>
    operation.map((op) => op(x)(y));

const superCalc = superCalculatorArray(operations);
console.log(superCalc(10)(5)); // Output: [15, 5, 50, 2]
