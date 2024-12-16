// Variable Declarations and Type Inference

// String
let greetings: string = "Hello Bilal";

greetings.toLowerCase(); // Note: Strings in TypeScript are immutable. Also one thing TS only suggests that method which is associated with type of the variable.

console.log(greetings);

// Number
let userId = 334455.3; // TypeScript automatically infers the type of 'userId' as number based on its value.

userId.toFixed();

// Be mindful of type inference: While TypeScript can infer types, explicitly declaring types can enhance code readability and maintainability.

// userId = "bilal"; // Example of a type error: Attempting to assign a string value to a variable declared as a number would result in a compilation error.

// Boolean
let isLoggedIn: boolean = false;

// Any
// 'any' is a type that TypeScript assigns when it cannot infer a more specific type. It essentially turns off type checking for that variable.
// It is generally discouraged to use 'any' as it bypasses TypeScript's type safety.
// Example: let x: any = 10;
// x = "hello"; // No type checking here

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {}; // Export an empty object to ensure this file is treated as a module.
