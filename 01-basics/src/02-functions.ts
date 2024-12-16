// Functions and Function Types

function addTwo(num: number): number {
  return num + 2;
  //return "hello"; // Example of a type error: returning a string instead of a number would result in a compilation error.
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  // Implementation details go here
}

// Arrow function to log in a user with name, email, and optional isPaid parameter
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  // Implementation details go here
};

// Example of calling functions with different arguments
let myValue = addTwo(5); // the variable will automaticaly detect the type of what value will come from this function.

getUpper("bilal");
signUpUser("bilal", "bilal@google.com", false);
loginUser("b", "b@b.com");

// The following commented-out function 'getValue' has a return type mismatch.
// TypeScript expects a boolean return type, but the string "200 OK" is not boolean.
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

// Declare an array 'heros' containing strings of hero names.
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]; // Example of a type error: assigning numbers to an array meant for strings would result in a compilation error

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// Use 'void' to indicate that this function does not return a value.
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// Use 'never' to indicate that this function does not return a value and never completes.
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
