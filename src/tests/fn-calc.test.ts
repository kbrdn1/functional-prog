// Import test library and functions
import { add, calculator, calculatorSuite, compose, divide, multiply, slugify, subtract, toLowerCase, toReplaceSpaceWithDash } from '../fn-calc';

import { describe, expect, test } from "bun:test";

describe("Functional Programming Calculator", () => {
  test("Addition", () => {
    const addOperation = calculator(add);
    const result = addOperation(10)(5);
    expect(result).toBe(15);
  });

  test("Subtraction", () => {
    const subtractOperation = calculator(subtract);
    const result = subtractOperation(10)(5);
    expect(result).toBe(5);
  });

  test("Multiplication", () => {
    const multiplyOperation = calculator(multiply);
    const result = multiplyOperation(10)(5);
    expect(result).toBe(50);
  });

  test("Division", () => {
    const divideOperation = calculator(divide);
    const result = divideOperation(10)(5);
    expect(result).toBe(2);
  });

  test("Calculator Suite", () => {
    const calc = calculatorSuite(10, 5);
    expect(calc.add).toBe(15);
    expect(calc.subtract).toBe(5);
    expect(calc.multiply).toBe(50);
    expect(calc.divide).toBe(2);
  });

  test("String Manipulation", () => {
    const result = slugify("Hello World");
    expect(result).toBe("hello-world");
  });

  test("Compose Functions", () => {
    const result = compose(toReplaceSpaceWithDash, toLowerCase)("Hello World");
    expect(result).toBe("hello-world");
  });
});
