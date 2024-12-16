// ---------- Partial ----------

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Use the Partial utility type to create a new type where all properties of the User type are optional
type PartialUser = Partial<User>;
// Partial makes all properties of a type optional.
// PartialUser now has all properties of User, but they are optional.

const user1: User = {
  id: 1,
  name: "John Doe",
  email: "abc@gmail.com",
  password: "password",
};

const partialUser: PartialUser = {
  id: user1.id,
  name: user1.name,
  // email and password are not required
};

console.log(partialUser); // Output: { id: 1, name: "John Doe" }

// ---------- Required ----------

// Use the Required utility type to create a new type where all properties of the User type are required
type RequiredUser = Required<PartialUser>;
// Required makes all properties of a type required.
// RequiredUser now has all properties of User, and they are required.

const requiredUser: RequiredUser = {
  id: 1,
  name: "John Doe",
  email: "abc@gmail.com",
  password: "password",
};

console.log(requiredUser); // Output: { id: 1, name: "John Doe", email: "abc@gmail.com", password: "password" }

// ---------- Readonly ----------

// Use the Readonly utility type to create a new type where all properties of the User type are readonly
type ReadonlyUser = Readonly<User>;
// Readonly makes all properties of a type readonly.
// ReadonlyUser now has all properties of User, and they are readonly.

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "John Doe",
  email: "abc@gmail.com",
  password: "password",
};

// readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(readonlyUser); // Output: { id: 1, name: "John Doe", email: "abc@gmail.com", password: "password" }

// ---------- Record ----------

// Use the Record utility type to create a new type with a set of properties of a specified type
type UserRoles = "admin" | "user" | "guest";
type UserRolePermissions = Record<UserRoles, string[]>;
// Record creates a type with a set of properties of a specified type.
// UserRolePermissions now has properties admin, user, and guest, each of which is an array of strings.

const permissions: UserRolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};

console.log(permissions); // Output: { admin: ["read", "write", "delete"], user: ["read", "write"], guest: ["read"] }

// ---------- Pick ----------

// Use the Pick utility type to create a new type with a subset of properties from the User type
type UserPreview = Pick<User, "id" | "name">;
// Pick creates a type by selecting specific properties from an existing type.
// UserPreview now only includes the id and name properties from the User type.

const user2: User = {
  id: 2,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  password: "securepassword123",
};

const userPreview: UserPreview = {
  id: user2.id,
  name: user2.name,
};

console.log(userPreview); // Output: { id: 2, name: "Jane Doe" }

// ---------- Omit ----------

// Use the Omit utility type to create a new type by omitting specific properties from the User type
type UserWithoutPassword = Omit<User, "password">;
// Omit creates a type by excluding specific properties from an existing type.
// UserWithoutPassword now includes all properties of User except for password.

const userWithoutPassword: UserWithoutPassword = {
  id: user2.id,
  name: user2.name,
  email: user2.email,
};

console.log(userWithoutPassword); // Output: { id: 2, name: "Jane Doe", email: "jane.doe@example.com" }

// ---------- Awaited ----------

// Use the Awaited utility type to get the type that a promise resolves to
type ResponseType = Awaited<Promise<string>>;
// Awaited extracts the type that a promise resolves to.
// ResponseType is now of type string.

async function fetchData(): Promise<string> {
  return "data";
}

const response: ResponseType = await fetchData();
console.log(response); // Output: "data"

// ---------- Exclude ----------

// Use the Exclude utility type to create a new type by excluding specific members from a union type
type Status = "active" | "inactive" | "pending";
type ActiveStatus = Exclude<Status, "inactive" | "pending">;
// Exclude creates a type by excluding specific members from a union type.
// ActiveStatus now only includes "active".

const activeStatus: ActiveStatus = "active";
// const invalidStatus: ActiveStatus = "inactive"; // Error: Type '"inactive"' is not assignable to type 'ActiveStatus'.

console.log(activeStatus); // Output: "active"

// ---------- Extract ----------

// Use the Extract utility type to create a new type by extracting specific members from a union type
type NonPendingStatus = Extract<Status, "active" | "inactive">;
// Extract creates a type by extracting specific members from a union type.
// NonPendingStatus now only includes "active" and "inactive".

const nonPendingStatus: NonPendingStatus = "active";
// const invalidNonPendingStatus: NonPendingStatus = "pending"; // Error: Type '"pending"' is not assignable to type 'NonPendingStatus'.

console.log(nonPendingStatus); // Output: "active"

// ---------- NonNullable ----------

// Use the NonNullable utility type to create a new type by excluding null and undefined from a type
type Name = string | null | undefined;
type NonNullableName = NonNullable<Name>;
// NonNullable creates a type by excluding null and undefined from a type.
// NonNullableName now only includes string.

const nonNullableName: NonNullableName = "John Doe";
// const invalidNonNullableName: NonNullableName = null; // Error: Type 'null' is not assignable to type 'NonNullableName'.

console.log(nonNullableName); // Output: "John Doe"

// ---------- Parameters ----------

function greet(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Use the Parameters utility type to get the types of the parameters of a function
type GreetParameters = Parameters<typeof greet>;
// Parameters extracts the types of the parameters of a function.
// GreetParameters is now a tuple type [string, number].

const greetParams: GreetParameters = ["John Doe", 30];
console.log(greet(...greetParams)); // Output: "Hello, my name is John Doe and I am 30 years old."

// ---------- ConstructorParameters ----------

class Person {
  constructor(public name: string, public age: number) {}
}

// Use the ConstructorParameters utility type to get the types of the parameters of a constructor
type PersonConstructorParameters = ConstructorParameters<typeof Person>;
// ConstructorParameters extracts the types of the parameters of a constructor.
// PersonConstructorParameters is now a tuple type [string, number].

const personParams: PersonConstructorParameters = ["John Doe", 30];
const person = new Person(...personParams);
console.log(person); // Output: Person { name: "John Doe", age: 30 }

// ---------- ReturnType ----------

function getAge(): number {
  return 30;
}

// Use the ReturnType utility type to get the return type of a function
type AgeReturnType = ReturnType<typeof getAge>;
// ReturnType extracts the return type of a function.
// AgeReturnType is now of type number.

const age: AgeReturnType = getAge();
console.log(age); // Output: 30

// ---------- InstanceType ----------

class Car {
  constructor(public make: string, public model: string) {}
}

// Use the InstanceType utility type to get the instance type of a class
type CarInstanceType = InstanceType<typeof Car>;
// InstanceType extracts the instance type of a class.
// CarInstanceType is now of type Car.

const car: CarInstanceType = new Car("Toyota", "Corolla");
console.log(car); // Output: Car { make: "Toyota", model: "Corolla" }

// ---------- NoInfer ----------

function processValue<T>(value: T, callback: (val: NoInfer<T>) => void) {
  callback(value);
}

// NoInfer prevents TypeScript from inferring the type of a generic parameter.
// This can be useful in situations where you want to enforce a specific type.

processValue("Hello", (val) => {
  console.log(val); // Output: "Hello"
});

// ---------- ThisParameterType ----------

function sayHello(this: { name: string }) {
  return `Hello, my name is ${this.name}.`;
}

// Use the ThisParameterType utility type to get the type of the this parameter of a function
type SayHelloThisType = ThisParameterType<typeof sayHello>;
// ThisParameterType extracts the type of the this parameter of a function.
// SayHelloThisType is now of type { name: string }.

const context: SayHelloThisType = { name: "John Doe" };
console.log(sayHello.call(context)); // Output: "Hello, my name is John Doe."

// ---------- OmitThisParameter ----------

function sayGoodbye(this: { name: string }) {
  return `Goodbye, ${this.name}.`;
}

// Use the OmitThisParameter utility type to create a new function type without the this parameter
type SayGoodbyeType = OmitThisParameter<typeof sayGoodbye>;
// OmitThisParameter creates a new function type without the this parameter.
// SayGoodbyeType is now of type () => string.

const sayGoodbyeFn: SayGoodbyeType = sayGoodbye.bind({ name: "John Doe" });
console.log(sayGoodbyeFn()); // Output: "Goodbye, John Doe."

// ---------- ThisType ----------

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

// ThisType allows you to specify the type of this in an object literal.
// This can be useful in situations where you want to define methods that use this.

let obj = makeObject({
  data: { x: 10, y: 20 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // 'this' is of type { x: number, y: number, moveBy: (dx: number, dy: number) => void }
      this.y += dy;
    },
  },
});

obj.moveBy(5, 5);
console.log(obj); // Output: { x: 15, y: 25, moveBy: [Function: moveBy] }

// ---------- Intrinsic String Manipulation Types ----------

// Use the Uppercase utility type to create a new type by converting a string type to uppercase
type UppercaseHello = Uppercase<"hello">;
// Uppercase creates a new type by converting a string type to uppercase.
// UppercaseHello is now of type "HELLO".

const uppercaseHello: UppercaseHello = "HELLO";
console.log(uppercaseHello); // Output: "HELLO"

// Use the Lowercase utility type to create a new type by converting a string type to lowercase
type LowercaseHello = Lowercase<"HELLO">;
// Lowercase creates a new type by converting a string type to lowercase.
// LowercaseHello is now of type "hello".

const lowercaseHello: LowercaseHello = "hello";
console.log(lowercaseHello); // Output: "hello"

// Use the Capitalize utility type to create a new type by capitalizing the first letter of a string type
type CapitalizeHello = Capitalize<"hello">;
// Capitalize creates a new type by capitalizing the first letter of a string type.
// CapitalizeHello is now of type "Hello".

const capitalizeHello: CapitalizeHello = "Hello";
console.log(capitalizeHello); // Output: "Hello"

// Use the Uncapitalize utility type to create a new type by uncapitalizing the first letter of a string type
type UncapitalizeHello = Uncapitalize<"Hello">;
// Uncapitalize creates a new type by uncapitalizing the first letter of a string type.
// UncapitalizeHello is now of type "hello".

const uncapitalizeHello: UncapitalizeHello = "hello";
console.log(uncapitalizeHello); // Output: "hello"

export {};
