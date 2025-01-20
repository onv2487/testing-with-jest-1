const stack = require("../src/stack");

// testar att undefined returneras om peek är tom
test("peek on empty stack returns undefined", () => {
  expect(stack.peek()).toBeUndefined();
});

// testar att ett element returneras
test("peek on stack with one element returns that element", () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});

// testar att pop metod returnerar det översta elementet och tar bort det
test("pop on stack with multiple elements returns the top element and removes it", () => {
  stack.push(1);
  stack.push("testord123");
  stack.push(42);
  const poppedValue = stack.pop();
  expect(poppedValue).toBe(42);
  expect(stack.peek()).toBe("testord123");
});

// testar att push och peek fungerar korrekt med array
test("push and peek with arrays as elements works correctly", () => {
  const arrayElement = ["ett", 23, "ord"];
  stack.push(arrayElement);
  expect(stack.peek()).toBe(arrayElement);
});

// testar att peek på en stack returnerar det översta elementet
test("peek on stack with two or more elements returns the top element", () => {
  stack.push(1);
  stack.push("wow");
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});
