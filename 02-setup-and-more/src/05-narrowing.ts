// Narrowing

// Narrowing in TypeScript is a technique to refine the type of a value based on runtime checks, ensuring type safety and enabling more precise code analysis.

// TypeScript analyzes the possible execution paths of programs to infer the most specific type of a value at any given point. This process, known as narrowing, involves using type guards and assignments to refine types to more specific ones than originally declared.

// ---- Narrowing with "typeof" type guards ----
// In TypeScript, checking against the value returned by typeof is a type guard. Because TypeScript encodes how typeof operates on different values, it knows about some of its quirks in JavaScript. Type guards like typeof help TypeScript refine types based on runtime checks. For instance, checking against typeof "string" allows for specific handling of string values.

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideuId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toLowerCase();
}

// here it seems we have covered every type but we have not cover the "" empty string which is a truthy value.
// so to prevent from this is called Truthiness narrowing
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// ----- Equality narrowing -----
// JavaScript’s looser equality checks with == and != also get narrowed correctly. If you’re unfamiliar, checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it’s potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.
interface Container {
  value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

// ---- The "in" operator narrowing -----
// JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator. TypeScript takes this into account as a way to narrow down potential types. TypeScript utilizes the "in" operator to narrow types by checking if an object has a specific property. This is particularly useful for refining types in complex structures.
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

// ----- "instanceof" narrowing -----
// JavaScript has an operator for checking whether or not a value is an “instance” of another value. More specifically, in JavaScript x instanceof Foo checks whether the prototype chain of x contains Foo.prototype. While we won’t dive deep here, and you’ll see more of this when we get into classes, they can still be useful for most values that can be constructed with new. As you might have guessed, instanceof is also a type guard, and TypeScript narrows in branches guarded by instanceofs.
// JavaScript's instanceof operator allows for checking if a value is an instance of a particular type. TypeScript leverages this for narrowing types, especially in class-based scenarios.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// ----- Using type predicates -----

// Type predicates enable precise type narrowing based on custom conditions. They are particularly useful when dealing with complex types.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
} // here the return statement will give true or false, so by mentiong "pet is Fish" we are leting know to typescript if return statement is true so it means the pet which is coming as an argument is Fish.

// Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // if we have not set "pet is Fish", i still confuse b/w Fish | Bird.
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}
// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.
// This is realy mind blowing thing of typescript.

// ----- Discriminated unions -----

// Discriminated unions help refine types based on shared discriminant properties. They are especially useful for handling complex data structures with multiple possible types.

// Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like string, boolean, and number. While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.
// For some motivation, let’s imagine we’re trying to encode shapes like circles, squares and rectangle. Circles keep track of their radiuses and squares keep track of their side lengths and rectangle keep track of there widht and length. We’ll use a field called kind to tell which shape we’re dealing with.
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side; // this is commented because we after complete this we also add rectangle in the shape type.
}
// this discriminated union is not such a cool thing but sometime useful in such senarios.

// Exhaustiveness checking with the help of "never" type.
// it may benificial if we havn't defined things for some kind of screnarios so what will be the default execution for that this exhaustiveness checking will help.

// TypeScript utilizes the "never" type for exhaustiveness checking in switch statements. This ensures all possible cases are handled, preventing unintended behavior.

// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.
// For example, adding a default to our getArea function which tries to assign the shape to never will not raise an error when every possible case has been handled.
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;

    // Ensure exhaustive checking by assigning shape to never. With this TypeScript raises an error if all possible cases are not handled.
    default: // this will never run
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

export {};
