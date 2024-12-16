// Arrays

// Array of strings
const superHeros: string[] = [];

// const heroPower: number[] = []
// Alternatively, you can use the Array<number> syntax for clarity
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

// Array of User objects to store user data
const allUsers: User[] = [];

const MLModels: number[][] = [[255, 255, 255], []];
// Note: Each inner array represents a model, and the elements within each inner array represent model parameters.

superHeros.push("spiderman");
heroPower.push(2);

allUsers.push({ name: "", isActive: true });

export {};
