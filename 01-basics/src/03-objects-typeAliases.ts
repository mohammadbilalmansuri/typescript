// Object Types and Type Aliases

const User = {
  name: "bilal",
  email: "bilal@google.com",
  isActive: true,
};

function createUser1(user: { name: string; isPaid: boolean }) {
  return user;
}

let newUser = { name: "bilal", isPaid: false, email: "b@b.com" };

createUser1(newUser);
// Passing an object directly to the function createUser1 allows additional properties not defined in the function signature.
// This behavior can lead to unexpected results and is generally not recommended.

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// ------------------ Type Aliases -------------------

type user = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: user): user {
  return { name: "", email: "", isActive: true };
}

createUser2({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string; // in this case of readonly if we keep it an array so we can push values on that array but can not assign new array to the _id.
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // Optional property
};

let myUser: User = {
  _id: "1245",
  name: "b",
  email: "b@b.com",
  isActive: false,
};

myUser.email = "b@gmail.com";
// myUser._id = "asa"; // Attempting to assign a new value to a readonly property '_id' would result in a compilation error.

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  }; // Compound type alias combining cardNumber, cardDate, and cvv properties. // asigning object like this in a combine type is not a good practice it is just for understanding.

type GoodUser = {};

export {};
