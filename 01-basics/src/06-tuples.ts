// Tuples

// Tuples in TypeScript are arrays with fixed sizes and known data types at specific positions.
// Tuples are strict arrays with a predefined order and fixed length. They allow specifying types for each position. Tuples enforce the type and order of elements, so you must provide exactly three values in the specified order.

// Declaring a tuple 'tUser' with specific types and fixed length
let tUser: [string, number, boolean];

tUser = ["bm", 131, true]; // Assigning values to the tuple in the specified order

let rgb: [number, number, number] = [255, 123, 112];

// Type alias for a tuple representing a user
type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "bm.com"; 

// Example of an odd behavior of tuples: Pushing a value to a tuple is not allowed.
// newUser.push(true); // This line would result in a compilation error

export {};
