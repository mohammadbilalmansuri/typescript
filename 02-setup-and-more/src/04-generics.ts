// Generics in TypeScript

// Generics in TypeScript allow you to create reusable components that work with a variety of data types.

// Sometimes there is a situations that we are try to make function like what every type of data we pass as argument function so the function should also return the same type or follow the same type inside the function that we have paasses as argument.

// so we can do this thing like this

// Approach 1: Using union type (less type-safe)
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// Approach 2: Using 'any' (not type-safe)
function identityTwo(val: any): any {
  return val;
}

// Approach 3: Using generics (type-safe)
// Here we're using generics to make the function flexible and type-safe.
// The function locks the data type of the argument passed and ensures that the return type matches.
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3); // Type inference: number
identityThree("3"); // Type inference: string
identityThree(true); // Type inference: boolean

// Shortcut syntax for generics, it could be any letter not even "T" but same everywhere.
function identityFour<T>(val: T): T {
  return val;
}

// Example with a custom type 'Bootle'
interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "nike", type: 1 });

// ---------------- Generics in array & arrow functions ----------------

// Generics in Functions
// This function demonstrates the usage of generics in functions.
// It takes an array of products of type T and returns one of the products.
function getSearchProducts<T>(products: T[]): T {
  // here when it is T in the return position it means we have to return one of the values from T[] but if we set it to T[] at return so we can return the array

  // do some database operation

  const index = 1;
  return products[index];
}

// Generics in Arrow Functions
// This arrow function showcases the use of generics in a more concise syntax.
const getMoreSearchProducts = <T>(products: T[]): T => {
  const index = 3;
  return products[index];
};

// in the generic syntaxt we can put a coma like this - <T,>, it used when we are working in a tsx file so it identify that this is an generics not an html tag.

// ---------------- Using type parameter in generics constraints ----------------

interface Database {
  id: number;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { id: 101, userName: "bilal", password: "bilal101" });

// --------------- Using class type in generics ---------------

// Define a generic class 'ProductManager' with a type parameter 'T' that represents a product type

class ProductManager<T> {
  private products: T[] = [];

  // Add a new product of type 'T' to the product list
  addProduct(product: T): void {
    this.products.push(product);
  }

  // Retrieve all products of type 'T'
  getAllProducts(): T[] {
    return this.products;
  }

  // Find a product by its ID, assuming each product has an 'id' property
  findProductById(id: number): T | undefined {
    return this.products.find((product) => (product as any).id === id);
  }

  // Update a product by its ID
  updateProduct(id: number, updatedProduct: T): void {
    const index = this.products.findIndex(
      (product) => (product as any).id === id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // Remove a product by its ID
  removeProduct(id: number): void {
    this.products = this.products.filter(
      (product) => (product as any).id !== id
    );
  }
}

// Example usage with an 'Electronics' type
interface Electronics {
  id: number;
  name: string;
  price: number;
  manufacturer: string;
}

const electronicsManager = new ProductManager<Electronics>();
electronicsManager.addProduct({
  id: 1,
  name: "Smartphone",
  price: 499,
  manufacturer: "TechCorp",
});
console.log(electronicsManager.getAllProducts()); // Output the list of electronics

// Example usage with a 'Clothing' type
interface Clothing {
  id: number;
  size: string;
  color: string;
  material: string;
}

const clothingManager = new ProductManager<Clothing>();
clothingManager.addProduct({
  id: 2,
  size: "M",
  color: "Red",
  material: "Cotton",
});
console.log(clothingManager.getAllProducts()); // Output the list of clothing

// Summary:
// Generics provide type safety and flexibility for creating reusable components.
// They allow you to work with different data types while maintaining type information.
// Constraints can be applied to restrict the types allowed in generics.

export {};
