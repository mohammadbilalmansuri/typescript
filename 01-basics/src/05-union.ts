// Union Types

let score: number | string = 33;
score = 44; 
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let bilal: User | Admin = { name: "bilal", id: 334 }; 

bilal = { username: "bm", id: 334 };

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);

// }
// getDbId(3);
// getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase(); // Example of using a type guard to narrow down the type within the function
  }
}

// ------- Union Types in Arrays -------

// Array of numbers
const data: number[] = [1, 2, 3];
// Array of strings
const data2: string[] = ["1", "2", "3"];
// Array allowing string, number, or boolean values
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

// Declare a variable 'seatAllotment' that can only take specific string literals as values.
// Variable to represent seat allotment with a union type 
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"; // Assigning a valid seat allotment value
// seatAllotment = "crew"; // Example of a type error: 'crew' is not a valid seat allotment value.

export {};
