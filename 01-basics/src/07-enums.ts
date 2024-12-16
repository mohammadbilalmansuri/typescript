// Enums

// // Enums allow for defining a set of named constants, either numeric or string.

// Define an enum 'SeatChoice' with predefined options for seat selection.
enum SeatChoice {
  AISLE = "aisle", // Assigning a value to the first enum member
  MIDDLE = 3, // Assigning a value to the second enum member
  WINDOW, // Automatically assigned value based on the previous member (4 in this case)
  FOURTH, // Automatically assigned value based on the previous member (5 in this case)
}

// Using the enum to assign a seat choice
const bmSeat = SeatChoice.AISLE; // Assigning the AISLE option to bmSeat

// Enums assign a limited set of values to a variable, providing a structured way to represent options or choices.
// Each enum member can have a specific value assigned to it, or if not provided, it will be automatically assigned based on the previous member.
// Enums can be used to improve code readability and maintainability by providing a clear list of options.
// Note: If you use a number-based enum and don't assign values explicitly, TypeScript automatically assigns incremental numeric values starting from 0.

// const enum SeatChoice {
//   AISLE = "aisle",
//   MIDDLE = 3,
//   WINDOW,
//   FOURTH,
// }
// Example of a const enum where values are inlined and not accessible at runtime.
// Note: The commented-out 'const enum' is a variation of enum that is completely inlined at compile time.
// This means that the enum is not present at runtime, and its usage is replaced with the literal values.

export {};
